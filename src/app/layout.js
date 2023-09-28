import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'B.B.P. Bethancourt',
  description: 'Ariadna García',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap');
      </style>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
