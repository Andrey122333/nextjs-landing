import styles from './Frameworks.module.css'

// React Server Component с кешированием (Next.js 16)
export default function Frameworks() {
  const frameworks = [
    {
      name: 'Next.js Espresso',
      version: 'Двойной шот',
      description: 'Мощный эспрессо для быстрого старта. Идеален для утреннего кодинга',
      features: [
        'Двойная порция арабики',
        'Насыщенный вкус с нотками шоколада',
        'Готовится за 25 секунд',
        'Бодрит как хороший рефакторинг',
      ],
      color: '#000000',
    },
    {
      name: 'SvelteKit Latte',
      version: 'С молочной пенкой',
      description: 'Нежный латте с идеальным балансом. Лёгкий и эффективный',
      features: [
        'Мягкий вкус молока и эспрессо',
        'Минимум калорий, максимум удовольствия',
        'Красивый латте-арт',
        'Быстрая подача как компиляция',
      ],
      color: '#ff3e00',
    },
    {
      name: 'Nuxt Cappuccino',
      version: 'С корицей',
      description: 'Классический капучино с авторским подходом. Гармония вкусов',
      features: [
        'Идеальная пропорция молока и кофе',
        'Посыпка корицей сверху',
        'Модульная подача в три слоя',
        'Универсален как Vue компоненты',
      ],
      color: '#00dc82',
    },
  ]

  return (
    <section className="section" style={{ background: 'var(--color-bg-alt)' }} id="menu">
      <div className="container">
        <h2 className="text-center">Наши фирменные напитки</h2>
        <p className={styles.intro}>
          Три авторских кофейных напитка, вдохновлённых современными технологиями
        </p>
        
        <div className={`grid grid-3 ${styles.grid}`}>
          {frameworks.map((framework) => (
            <article key={framework.name} className={`card ${styles.card}`}>
              <div className={styles.icon} style={{ color: framework.color }}>
                <div className={styles.iconPlaceholder}></div>
              </div>
              <h3 className={styles.name}>{framework.name}</h3>
              <div className={styles.version}>Версия {framework.version}</div>
              <p className={styles.description}>{framework.description}</p>
              <ul className={styles.features}>
                {framework.features.map((feature) => (
                  <li key={feature}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 10l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
