import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// import Nav from '@/components/Nav'
import Provider from '@/components/Provider'

export const metadata: Metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient" />
          <main className="app">
            {/* <Nav /> */}
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
