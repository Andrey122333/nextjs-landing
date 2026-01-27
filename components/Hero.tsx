import styles from './Hero.module.css'

// React Server Component
export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            Кафе{' '}
            <span className="text-gradient">«Три Фреймворка»</span>
          </h1>
          <p className={styles.subtitle}>
            Уникальное кафе для разработчиков. Кодируй, общайся и наслаждайся авторским кофе
            в атмосфере инноваций. Каждый напиток — это технологический шедевр
          </p>
          <div className={styles.cta}>
            <a href="#about" className="btn btn-primary">
              О нас
            </a>
            <a href="#menu" className="btn btn-secondary">
              Наше меню
            </a>
          </div>
        </div>
      </div>

      {/* Декоративный градиентный фон */}
      <div className={styles.gradient} aria-hidden="true"></div>
    </section>
  )
}
