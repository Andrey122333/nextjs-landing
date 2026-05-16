import styles from './Footer.module.css'

// React Server Component
export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = {
    frameworks: [
      { name: 'Next.js', url: 'https://nextjs.org/docs' },
      { name: 'SvelteKit', url: 'https://kit.svelte.dev/docs' },
      { name: 'Nuxt', url: 'https://nuxt.com/docs' },
    ],
    resources: [
      { name: 'Core Web Vitals', url: 'https://web.dev/vitals/' },
      { name: 'Lighthouse', url: 'https://developer.chrome.com/docs/lighthouse/' },
      { name: 'Performance API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_API' },
    ],
  }

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Лендинг</h3>
            <p className={styles.description}>
              Научное исследование производительности SSR-фреймворков
            </p>
          </div>

          <div className={styles.section}>
            <h4 className={styles.heading}>Документация фреймворков</h4>
            <ul className={styles.links}>
              {links.frameworks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {link.name}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.heading}>Ресурсы</h4>
            <ul className={styles.links}>
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {link.name}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.section}>
            <h4 className={styles.heading}>Контакты</h4>
            <ul className={styles.links}>
              <li>
                <a href="mailto:val_andrey@mail.ru" className={styles.link}>
                  val_andrey@mail.ru
                </a>
              </li>
              <li>
                <a href="https://github.com/Andrey122333/ssr-benchmark-infra" target="_blank" rel="noopener noreferrer" className={styles.link}>
                  GitHub
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Лендинг. Все права защищены.
          </p>
          <p className={styles.tech}>
            Собрано с помощью Next.js {process.env.NEXT_PUBLIC_FRAMEWORK_VERSION || '15+'}
          </p>
        </div>
      </div>
    </footer>
  )
}
