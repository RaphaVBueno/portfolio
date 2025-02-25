import Image from 'next/image'
import styles from './Projects.module.css'

function Projects() {
  const projects = [
    {
      title: 'Lista de Tarefas',
      description:
        'Este projeto trata-se de uma aplicação web para organização de tarefas, permitindo que os usuários criem, editem, excluam tarefas, além de poder organiza-las por categorias e tags. Conta com autenticação segura, recuperação de senha via e-mail e edição de perfil com upload de imagem.',
      techs: [
        { name: 'Linguagem', techs: 'TypeScript' },
        {
          name: 'Frontend',
          techs:
            'React, React Router, Material UI (MUI), Axios, React Hook Form, TanStack React Query',
        },
        {
          name: 'Backend',
          techs: 'Node.js, Express,PostgreSQL, Prisma ORM, Multer, Nodemailer',
        },
        { name: 'Segurança', techs: ' Bcrypt, JSON Web Token (JWT)' },
        { name: 'Validação & Formatação', techs: 'Zod, Date-fns' },
        { name: 'Testes', techs: 'Vitest, Supertest' },
      ],
      image: '/projeto01.jpg',
      repoLink: '#',
      projectLink: 'https://todo-app-bav.pages.dev/',
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
              {project.techs.map((tech) => (
                <p key={tech.name}>
                  <strong>{tech.name}</strong>: {tech.techs}
                </p>
              ))}
              <div className={styles.projectsLinks}>
                <div>
                  <a href={project.projectLink} target="_blank">
                    <Image
                      src="/site-projeto.png"
                      alt="site logo"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href={project.projectLink} target="_blank">
                    Acessar Projeto
                  </a>
                </div>
                <div>
                  <a href={project.repoLink} target="_blank">
                    <Image
                      src="/repo.png"
                      alt="github logo"
                      width={30}
                      height={30}
                    />
                  </a>
                  <a href={project.repoLink} target="_blank">
                    Acessar Repositório
                  </a>
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
