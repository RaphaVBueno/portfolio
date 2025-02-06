'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Info from './components/Info'
import Footer from './components/Footer'

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
              height={625}
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
        <Info></Info>
      </main>
      <Footer></Footer>
    </div>
  )
}
