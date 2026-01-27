import styles from './Methodology.module.css'

// React Server Component
export default function Methodology() {
  const metrics = [
    {
      name: 'Кофе',
      fullName: 'Эспрессо, латте, капучино',
      target: '350-450₽',
      description: 'Классические кофейные напитки на основе отборной арабики',
    },
    {
      name: 'Десерты',
      fullName: 'Торты, чизкейки, круассаны',
      target: '250-550₽',
      description: 'Свежая выпечка и авторские десерты от нашего шеф-кондитера',
    },
    {
      name: 'Завтраки',
      fullName: 'С 8:00 до 12:00',
      target: '450-750₽',
      description: 'Сытные завтраки для энергичного старта рабочего дня',
    },
    {
      name: 'Обеды',
      fullName: 'С 12:00 до 16:00',
      target: '550-850₽',
      description: 'Бизнес-ланчи и комплексные обеды для команд разработчиков',
    },
  ]

  const infrastructure = [
    'Профессиональное оборудование La Marzocco',
    'Зёрна свежей обжарки каждую неделю',
    'Фильтрованная вода для идеального вкуса',
    'Альтернативные виды молока (овсяное, соевое)',
    'Система лояльности для постоянных гостей',
    'Доставка кофе в офис',
  ]

  return (
    <section className="section" id="methodology">
      <div className="container">
        <h2 className="text-center">Меню и атмосфера</h2>
        <p className={styles.intro}>
          Продуманное меню и комфортная атмосфера для работы и отдыха
        </p>

        <div className={styles.content}>
          <div className={styles.metricsSection}>
            <h3>Основные категории меню</h3>
            <div className={`grid grid-2 ${styles.metricsGrid}`}>
              {metrics.map((metric) => (
                <div key={metric.name} className={styles.metricCard}>
                  <div className={styles.metricHeader}>
                    <span className={styles.metricName}>{metric.name}</span>
                    <span className={styles.metricTarget}>{metric.target}</span>
                  </div>
                  <div className={styles.metricFull}>{metric.fullName}</div>
                  <p className={styles.metricDesc}>{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.infrastructureSection}>
            <h3>Что делает нас особенными</h3>
            <ul className={styles.infrastructureList}>
              {infrastructure.map((item) => (
                <li key={item}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.processSection}>
            <h3>Как мы готовим</h3>
            <ol className={styles.processList}>
              <li>
                <strong>Выбор зёрен:</strong> только отборная арабика из лучших регионов мира
              </li>
              <li>
                <strong>Обжарка:</strong> средняя обжарка для раскрытия всех нот и ароматов
              </li>
              <li>
                <strong>Помол:</strong> свежий помол перед каждым приготовлением для максимального вкуса
              </li>
              <li>
                <strong>Экстракция:</strong> точная температура и давление для идеального эспрессо
              </li>
              <li>
                <strong>Подача:</strong> красивая презентация и внимание к деталям в каждой чашке
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
