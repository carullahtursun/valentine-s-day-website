import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Dancing_Script } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ahsen Tutar - Sevgililer Günün Kutlu Olsun',
  description: 'Sana olan sevgimi anlatmak için hazırladım.',
}

export const viewport: Viewport = {
  themeColor: '#1a0a10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <body className={`${playfair.variable} ${dancing.variable} font-sans antialiased overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}
