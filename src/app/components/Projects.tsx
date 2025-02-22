import Image from 'next/image'
import styles from './Projects.module.css'

function Projects() {
  const projects = [
    {
      title: 'Lista de Tarefas',
      description:
        'O projeto consiste em uma lista de tarefas, onde o usuário pode adicionar, editar e excluir tarefas. Coincidentemente, após o maior ícone da Academia, o meia Ademir da Guia, encerrar a carreira em 1977, o Palmeiras ficou durante um longo período sem conquistar títulos. Conhecido como "Divino" por conta da grande classe no trato da bola e pela eficiência, Ademir é considerado o maior jogador da história do alviverde, com a impressionante marca de 901 jogos disputados, 153 gols marcados e dezenas de títulos conquistados, entre campeonatos oficiais e torneios amistosos nacionais e internacionais',
      image: '/projeto01.jpg',
      repoLink: '#',
      projectLink: '#',
    },
  ]

  return (
    <section className={`${styles.section2} reveal`} id="projetos">
      <div className={styles.projectsTitle}>
        <h2>PROJETOS</h2>
      </div>{' '}
      <div className={styles.projects}>
        {projects.map((project) => (
          <div key={project.title}>
            <div className={styles.projectsImage}>
              <Image
                src={project.image}
                alt={`print do projeto ${project.title}`}
                width={530}
                height={260}
              />
            </div>
            <div className={styles.projectsText}>
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className={styles.projectsLinks}>
                <div>
                  <a href={project.projectLink}>
                    <Image
                      src="/site-projeto.png"
                      alt="site logo"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href={project.projectLink}>Acessar Projeto</a>
                </div>
                <div>
                  <a href={project.repoLink}>
                    <Image
                      src="/repo.png"
                      alt="github logo"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href={project.repoLink}>Acessar Repositório</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
