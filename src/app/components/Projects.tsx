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
      repoLink: 'https://github.com/RaphaVBueno/todo-api',
      projectLink: 'https://todo-app-bav.pages.dev/',
    },
    {
      title: 'Chatbot de Vendas para Consultoria Fitness',
      description: `Este projeto é um assistente virtual(chatbot) para WhatsApp, focado na automação de vendas para serviços de consultoria de personal trainer. A aplicação utiliza Inteligência Artificial (LangChain e OpenAI) para interagir com usuários, e apresentar os serviços disponíveis. 
      O backend se conecta a um painel de gerenciamento frontend, que permite monitorar as conversas em tempo real. Através dessa interface, é possível pausar a automação para contatos específicos, assumir o controle do atendimento e enviar mensagens manualmente. O REPOSITÓRIO DESTE PROJETO É PRIVADO`,
      techs: [
        { name: 'Linguagem', techs: 'TypeScript' },
        {
          name: 'Frontend',
          techs:
            'React, Vite, React Router, Tailwind CSS, Axios, React Hot Toast',
        },
        {
          name: 'Backend',
          techs: 'Node.js, Express, PostgreSQL, Prisma ORM',
        },
        {
          name: 'Inteligência Artificial (IA)',
          techs: 'LangChain.js, OpenAI, FAISS (Vector Store)',
        },
        { name: 'Comunicação', techs: 'WhatsApp (Baileys), Socket.io' },
        {
          name: 'Segurança',
          techs: ' Bcrypt, JSON Web Token (JWT), Google reCAPTCHA',
        },
        { name: 'Validação & Formatação', techs: 'Zod, Date-fns' },
        { name: 'Testes', techs: 'Jest, Supertest, Docker' },
      ],
      image: '/projeto02.jpg',
      repoLink: 'https://github.com/RaphaVBueno/chatbot-consultoria',
      projectLink: 'https://chatbot-frontend-omega-three.vercel.app/login',
    },
    {
      title: 'Homepage Pessoal',
      description: `Este projeto é um dashboard pessoal, projetado para centralizar informações úteis em uma única "homepage". O núcleo da aplicação é um backend em Python (FastAPI) que realiza "web scraping" para extrair os títulos e links mais recentes de sites de notícias pré-definidos.
      A API do FastAPI envia esses dados para um frontend em React (construído com Vite e Tailwind CSS). A interface exibe o feed de notícias e, além disso, apresenta quadros de lembretes de JavaScript e Python e um widget com a cotação atual de criptomoedas.`,
      techs: [
        { name: 'Linguagem', techs: 'TPython, TypeScript' },
        {
          name: 'Frontend',
          techs: 'React, Vite, Tailwind CSS, Axios',
        },
        {
          name: 'Backend',
          techs: 'FastAPI, Gunicorn, Uvicorn',
        },
        { name: 'Web Scraping', techs: 'Requests, BeautifulSoup4, Lxml' },
      ],
      image: '/projeto03.jpg',
      repoLink: 'https://github.com/RaphaVBueno/my-home-page-server',
      projectLink: 'https://my-homepage-5ir.pages.dev/',
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
