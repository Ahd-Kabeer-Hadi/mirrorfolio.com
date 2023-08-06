import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mirrorfolio',
  description: "Welcome to Ahammad Kabeer Hadi's World at Mirrorfolio! Discover the multi-talented realm of a Developer, Designer, AI Enthusiast, and Biker. Explore through his Projects and contributions, where Brilliance and Creativity converge into an inspiring journey.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
