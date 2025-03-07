'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Info from './components/Info'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import Projects from './components/Projects'
import MenuHamburger from './components/MenuHamburguer'

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
        <div className={styles.headerContainer}>
          <h1>R</h1>
          <nav className={styles.nav}>
            <a href="#inicio">Inicio</a>
            <a href="#sobre">Sobre mim</a>
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
            <a
              href="#projetos"
              onClick={() => (setShowhardSkills(false), setShowSkills(false))}
            >
              Projetos
            </a>
          </nav>
          <MenuHamburger
            setShowhardSkills={setShowhardSkills}
            setShowSkills={setShowSkills}
          />
        </div>
      </header>
      <main>
        <section className={styles.section} id="inicio">
          <div>
            <p>Olá visitante, eu sou</p>
            <h1>Raphael V. Bueno</h1>
            <h2>Desenvolvedor Web Fullstack</h2>
            <button
              className={styles.buttonCv}
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1AMh4nA_T3tPJGSmLeTot7Fem4x7IKLaQ/view?usp=drive_link',
                  '_blank'
                )
              }
            >
              Download CV
            </button>
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
            Desenvolvedor web fullstack em transição de carreira, com formação
            em Educação Física e técnico em Administração. Experiência em
            liderança, gestão e treinamento de equipes, e atendimento do
            cliente, atualmente coordenador técnico em uma academia. Possuo
            experiência com JavaScript, TypeScript, Node.js, Express, NextJS,
            React, Redux, HTML5, CSS3, Git, PostgreSQL e Prisma ORM. Buscando
            oportunidades como desenvolvedor para aplicar minhas habilidades
            técnicas e contribuir para projetos inovadores.
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
