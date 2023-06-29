import './globals.css'
import { Heebo } from 'next/font/google'

const heebo = Heebo({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={heebo.className}>{children}</body>
    </html>
  )
}
