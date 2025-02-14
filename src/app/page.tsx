'use client'

import Image from 'next/image'
import styles from './page.module.css'
//import './globals.css'
import Info from './components/Info'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import Projects from './components/Projects'

export default function Home() {
  const [showSkills, setShowSkills] = useState(false)
  const [showhardSkills, setShowhardSkills] = useState(true)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          } else {
            entry.target.classList.remove('active')
          }
        })
      },
      { threshold: 0.2 }
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <div className="page">
      <header className={styles.header}>
        <h1>R</h1>
        <nav className={styles.nav}>
          <a href="#sobre">Sobre mim</a>
          <a
            href="#projetos"
            onClick={() => (setShowhardSkills(false), setShowSkills(false))}
          >
            Projetos
          </a>
          <a
            href="#skills"
            onClick={() => (setShowhardSkills(true), setShowSkills(false))}
          >
            Hard skills
          </a>
          <a
            href="#skills"
            onClick={() => (setShowhardSkills(false), setShowSkills(true))}
          >
            Soft Skills
          </a>
        </nav>
      </header>
      <main>
        <section className={styles.section}>
          <div>
            <p>Olá visitante, eu sou</p>
            <h1>Raphael V. Bueno</h1>
            <h2>Desenvolvedor Web Fullstack</h2>
            <button className={styles.buttonCv}>Download CV</button>
          </div>
          <div className={styles.avatar}>
            <Image
              src="/avatar.png"
              alt="meu avatar"
              width={600}
              height={625}
            />
          </div>
        </section>
        <section className={`${styles.section2} reveal`} id="sobre">
          <h2>Sobre Mim</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit cum tempore quia assumenda dolorum accusantium aliquid
            recusandae accusamus laborum officiis? Placeat aut repudiandae
            doloremque quia modi minima repellendus totam tempore. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Sed ratione est
            molestias suscipit at earum ad illo veritatis? Rerum ducimus
            explicabo quam assumenda sapiente? Sequi minus ipsam nobis expedita
            consequatur? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Reprehenderit illo, quisquam beatae cumque unde, rem porro
            similique perferendis fugiat quos enim iste blanditiis dolores
            laboriosam corporis exercitationem. Itaque, distinctio officia.
          </p>
        </section>
        <Info
          showhardSkills={showhardSkills}
          setShowhardSkills={setShowhardSkills}
          showSkills={showSkills}
          setShowSkills={setShowSkills}
        />
        <Projects />
      </main>
      <Footer></Footer>
    </div>
  )
}
