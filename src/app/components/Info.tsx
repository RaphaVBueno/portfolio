import Image from 'next/image'
import styles from './Info.module.css'

type InfoProps = {
  showhardSkills: boolean
  setShowhardSkills: React.Dispatch<React.SetStateAction<boolean>>
  showSkills: boolean
  setShowSkills: React.Dispatch<React.SetStateAction<boolean>>
}

function Info(props: InfoProps) {
  const { showhardSkills, setShowhardSkills, showSkills, setShowSkills } = props

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
    <section className={`${styles.section2} reveal`} id="skills">
      <div className={styles.menu}>
        <button
          className={
            showhardSkills ? styles.menuButtonActive : styles.menuButton
          }
          onClick={() => (setShowSkills(false), setShowhardSkills(true))}
        >
          HARD SKILLS
        </button>
        <button
          className={showSkills ? styles.menuButtonActive : styles.menuButton}
          onClick={() => (setShowSkills(true), setShowhardSkills(false))}
        >
          SOFT SKILLS
        </button>
      </div>

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
            <li>Proatividade</li>
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
  )
}

export default Info
