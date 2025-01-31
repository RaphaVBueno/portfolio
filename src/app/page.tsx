'use client'

import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
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
            <button className={styles.menuButton1}>Projetos</button>
            <button className={styles.menuButton}>hard skills</button>
            <button className={styles.menuButton}>soft skills</button>
          </div>
          <div className={styles.content}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              reprehenderit veritatis repellat minima repellendus? Possimus eos
              inventore consectetur, iste vitae tenetur placeat at voluptate cum
              provident cupiditate? Pariatur, iste id. Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Omnis quo sed distinctio non
              aspernatur laborum eius, ea hic facere fugiat veritatis nisi!
              Atque unde perspiciatis, nam dolorem nulla excepturi nihil? Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Hic corrupti
              libero, accusantium dolorum, est placeat ad eveniet mollitia
              maiores corporis, tenetur quisquam natus deserunt iusto modi! Quo
              necessitatibus recusandae modi. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Unde earum rerum repellendus ratione
              maiores illum! A, nam animi! Autem eius quidem asperiores quasi
              tempora vel sunt nam exercitationem porro at?
            </p>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  )
}
