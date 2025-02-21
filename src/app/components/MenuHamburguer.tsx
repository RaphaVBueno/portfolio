import Image from 'next/image'
import styles from './MenuHamburger.module.css'
import { useState } from 'react'

function MenuHamburger() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={styles.menuContainer}>
      <button
        className={styles.menuHamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <Image src="/menu.png" alt="logo" width={35} height={35} />
      </button>
      {menuOpen && (
        <div className={styles.menuList}>
          <ul>
            <li>
              <a href="#inicio" onClick={() => setMenuOpen(false)}>
                Inicio
              </a>
            </li>
            <li>
              <a href="#sobre" onClick={() => setMenuOpen(false)}>
                Sobre Mim
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Soft Skills
              </a>
            </li>
            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Hard Skills
              </a>
            </li>
            <li>
              <a href="#projetos" onClick={() => setMenuOpen(false)}>
                Projetos
              </a>
            </li>
          </ul>
          <div className={styles.menuContact}>
            <a
              href="https://api.whatsapp.com/send?1=pt_BR&phone=5512988152045"
              target="_blank"
              rel="external"
            >
              Enviar via WhatsApp
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuHamburger
