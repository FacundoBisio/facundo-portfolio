import type { Metadata } from 'next'
import { Bricolage_Grotesque, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ScrollProgress } from '@/components/motion/ScrollProgress'
import { SmoothScroll } from '@/components/motion/SmoothScroll'
import { BackgroundGrid } from '@/components/motion/BackgroundGrid'

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Facundo Bisio — Full-Stack Developer',
  description:
    'Desarrollador Full-Stack especializado en React, Node.js e integración de IA. Construyo desde el schema de base de datos hasta la interfaz final. Disponible para roles remotos.',
  keywords: [
    'Full-Stack Developer',
    'React',
    'Node.js',
    'TypeScript',
    'Next.js',
    'Córdoba Argentina',
    'Freelance',
  ],
  authors: [{ name: 'Facundo Bisio' }],
  creator: 'Facundo Bisio',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    title: 'Facundo Bisio — Full-Stack Developer',
    description: 'Construyo productos de software que resuelven problemas reales.',
    siteName: 'Facundo Bisio Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facundo Bisio — Full-Stack Developer',
    description: 'Construyo productos de software que resuelven problemas reales.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${jakarta.variable} ${jetbrains.variable}`}
    >
      <body>
        <SmoothScroll />
        <BackgroundGrid />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
