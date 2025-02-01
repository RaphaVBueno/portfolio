'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [showProjects, setShowProjects] = useState(true)
  const [showSkills, setShowSkills] = useState(false)
  const [showhardSkills, setShowhardSkills] = useState(false)
  const techs = [
    'JavaScript',
    'TypeScript',
    'NextJS',
    'React',
    'Redux',
    'HTML5',
    'CSS3',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Prisma',
    'Git',
  ]

  return (
    <div>
      <header className={styles.header}>
        <h1>R</h1>
        <div className={styles.divNav}>
          <nav>Sobre mim</nav>
          <nav>Projetos</nav>
          <nav>Hard skills</nav>
          <nav>Soft Skills</nav>
        </div>
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
              height={650}
            />
          </div>
        </section>
        <section className={styles.section2}>
          <h2>Sobre Mim</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur, ad excepturi. Modi, corrupti possimus. Numquam sunt a
            commodi adipisci laborum esse similique? Ex voluptas dolorum optio
            similique magni tempore quidem. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Repellat sed libero facere assumenda
            nemo ipsam asperiores iusto, obcaecati, quas tempora eos voluptatem
            velit, quo eius ducimus nesciunt voluptas earum beatae. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Iste quisquam eius qui
            maxime facilis. Asperiores provident dolores vel tempora facere
            assumenda dolor delectus at. Iste iusto deleniti aliquam non ullam?
          </p>
        </section>
        <section className={styles.section2}>
          <div className={styles.menu}>
            <button
              className={styles.menuButton}
              onClick={() => (
                setShowProjects(true),
                setShowSkills(false),
                setShowhardSkills(false)
              )}
            >
              Projetos
            </button>
            <button
              className={styles.menuButton}
              onClick={() => (
                setShowProjects(false),
                setShowSkills(false),
                setShowhardSkills(true)
              )}
            >
              hard skills
            </button>
            <button
              className={styles.menuButton}
              onClick={() => (
                setShowProjects(false),
                setShowSkills(true),
                setShowhardSkills(false)
              )}
            >
              soft skills
            </button>
          </div>
          {showProjects && (
            <div className={styles.projects}>
              <div>
                <div className={styles.projectsImage}>
                  <Image
                    src="/avatar.png"
                    alt="meu avatar"
                    width={200}
                    height={200}
                  />
                </div>
                <div className={styles.projectsText}>
                  <h1>Lista de Tarefas</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quis, rerum labore! Aspernatur sint, itaque recusandae
                    ratione dignissimos iste nisi qui ipsum amet pariatur quam
                    dolorum, ipsam, assumenda nostrum at saepe. Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Repudiandae
                    reiciendis porro nesciunt minima odio, assumenda omnis
                    placeat enim, sint, at facere adipisci nostrum quis ipsa
                    eveniet corrupti debitis labore deserunt. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Ut, quaerat
                    laboriosam modi asperiores odio minus totam expedita maxime
                    vero illo earum sequi! Sit reiciendis odit atque soluta
                    repellendus vitae doloremque!
                  </p>
                  <div>
                    link github, link projeto online, quem sabe colocar os icons
                    das tecnologias utilizadas
                  </div>
                </div>
              </div>
            </div>
          )}
          {showSkills && (
            <div className={styles.softSkills}>
              <ul>
                <li>Trabalho em equipe</li>
                <li>Comunicação eficaz</li>
                <li>Resolução de problemas</li>
                <li>Liderança</li>
                <li>Eficiente</li>
                <li>Facilidade para aprender</li>
                <li>Comprometimento</li>
                <li>blabalbalablablba</li>
                <li>blabalbalablablablab</li>
              </ul>
            </div>
          )}
          {showhardSkills && (
            <div className={styles.teste}>
              <div className={styles.hardSkills}>
                {techs.map((tech) => (
                  <div key={tech}>
                    {' '}
                    <p>{tech}</p>
                    <Image
                      src={`/${tech}.png`}
                      alt={`${tech} logo`}
                      width={40}
                      height={40}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <footer></footer>
    </div>
  )
}
