import Image from 'next/image'
import styles from './MenuHamburger.module.css'
import { useState } from 'react'

type MenuHamburgerProps = {
  setShowhardSkills: React.Dispatch<React.SetStateAction<boolean>>
  setShowSkills: React.Dispatch<React.SetStateAction<boolean>>
}

function MenuHamburger(props: MenuHamburgerProps) {
  const { setShowhardSkills, setShowSkills } = props
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={styles.menuContainer}>
      {menuOpen ? (
        <button
          className={styles.menuHamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image src="/x.png" alt="logo" width={35} height={35} />
        </button>
      ) : (
        <button
          className={styles.menuHamburger}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image src="/menu.png" alt="logo" width={35} height={35} />
        </button>
      )}

      {menuOpen && (
        <div className={`${styles.menuList} ${menuOpen && styles.open}`}>
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
              <a
                href="#skills"
                onClick={() => (
                  setMenuOpen(false),
                  setShowhardSkills(false),
                  setShowSkills(true)
                )}
              >
                Soft Skills
              </a>
            </li>
            <li>
              <a
                href="#skills"
                onClick={() => (
                  setMenuOpen(false),
                  setShowhardSkills(true),
                  setShowSkills(false)
                )}
              >
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
