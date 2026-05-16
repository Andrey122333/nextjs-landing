import type { Metadata, Viewport } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'

// Оптимизация шрифтов с preload и display swap
const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
})

const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Кафе «Три Фреймворка» — Место встречи разработчиков',
  description: 'Уникальное кафе для разработчиков с высокоскоростным Wi-Fi, авторским кофе и комфортными рабочими местами. Работаем 24/7.',
  keywords: ['кафе для программистов', 'коворкинг', 'кофе', 'Wi-Fi', 'IT-сообщество', 'разработчики', 'митапы', 'хакатоны'],
  authors: [{ name: 'Кафе «Три Фреймворка»' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    title: 'Кафе «Три Фреймворка» — Место встречи разработчиков',
    description: 'Уникальное кафе для разработчиков с авторским кофе и комфортной атмосферой',
    siteName: 'Кафе «Три Фреймворка»',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
