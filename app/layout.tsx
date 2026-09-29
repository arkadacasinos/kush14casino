import type { Metadata, Viewport } from 'next'
import './globals.css'

const kz14Url = 'https://kush14casino.vercel.app/'
const kz14Title =
  'Kush Casino официальный сайт — играть в Куш Казино: слоты, бонусы и зеркало 24/7'
const kz14Description =
  'Kush Casino официальный сайт: играйте в Куш Казино онлайн. Куш казино зеркало рабочее, лицензионные слоты, выплаты на карту и крипто, мобильная версия и поддержка 24/7 — всё о Kush Casino прямо здесь.'

export const metadata: Metadata = {
  metadataBase: new URL(kz14Url),
  title: kz14Title,
  description: kz14Description,
  keywords: [
    'kush casino',
    'kush casino официальный сайт',
    'kush casino официальный',
    'куш казино официальный сайт',
    'куш казино официальный',
    'куш казино',
    'kush casino зеркало',
    'kush casino играть',
    'куш казино зеркало рабочее',
    'куш казино играть',
    'куш казино онлайн',
    'куш казино зеркало',
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: kz14Url },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: kz14Url,
    siteName: 'Kush Casino',
    title: kz14Title,
    description: kz14Description,
    images: [
      {
        url: '/art/kz14-hall.png',
        width: 1376,
        height: 768,
        alt: 'Зал Kush Casino: ряды слотов с золотой подсветкой',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: kz14Title,
    description: kz14Description,
    images: ['/art/kz14-hall.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0d3a2d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Слот для дополнительных пользовательских тегов: вставляйте сюда свои meta, link и другие теги */}
      </head>
      <body>{children}</body>
    </html>
  )
}
