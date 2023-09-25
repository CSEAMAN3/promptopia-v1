import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
