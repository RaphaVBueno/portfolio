import Image from 'next/image'
import styles from './Footer.module.css'
function Footer() {
  const contacts = [
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/raphael-vieira-bueno-41323a332/',
      icon: '/Linkedin.png',
    },
    {
      name: 'Github',
      link: 'https://github.com/RaphaVBueno',
      icon: '/GitHub.png',
    },
    { name: 'Email', link: 'mailto:rafavbueno@gmail.com', icon: '/Email.png' },
    {
      name: 'Telefone',
      link: 'https://api.whatsapp.com/send?1=pt_BR&phone=5512988152045',
      icon: '/WhatsApp.png',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/raphabueno_personal/#',
      icon: '/Instagram.png',
    },
  ]

  return (
    <footer className={styles.footer}>
      <h2>Contatos</h2>
      <div className="reveal">
        {contacts.map((contact) => (
          <div key={contact.name}>
            {' '}
            <a href={contact.link} target="_blank" rel="external">
              <Image
                src={contact.icon}
                alt={`${contact.name} logo`}
                width={40}
                height={40}
              />
            </a>
            <a href={contact.link} target="_blank" rel="external">
              {contact.name}
            </a>
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
