# НИР3 Landing — Next.js

Лендинг-страница кафе «Три Фреймворка» для сравнения производительности SSR-фреймворков.

## Технологический стек

- **Next.js** 15.1.0 (App Router)
- **React** 19.0.0 (Server Components)
- **TypeScript** 5.3.3
- **CSS Modules**
- **Node.js** 20.x LTS
- **Порт:** 3000

## Команды

```bash
# Development
npm install
npm run dev              # http://localhost:3000

# Production
npm run build
npm start

# Docker
docker build -t nir3-nextjs .
docker run -p 3000:3000 nir3-nextjs
```

## Структура

```
app/
  layout.tsx             # Root layout
  page.tsx               # Главная страница
  globals.css            # Глобальные стили
components/
  Hero.tsx               # Hero-секция
  About.tsx              # О кафе
  Frameworks.tsx         # Фирменные напитки
  Features.tsx           # Преимущества
  Methodology.tsx        # Меню и атмосфера
  ContactForm.tsx        # Форма бронирования (Client Component)
  Footer.tsx             # Футер
  *.module.css           # Стили компонентов
```

## Целевые метрики

- **LCP:** ≤ 2.5s
- **INP:** ≤ 200ms
- **CLS:** ≤ 0.1
- **TTFB:** ≤ 600ms
- **Bundle:** < 100KB (gzip)
