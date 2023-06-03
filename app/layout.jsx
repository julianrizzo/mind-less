import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

import HeaderBar from './layout/headerBar'
import Navigation from './layout/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mind-less',
  description: 'A Second Brain app',
}

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <HeaderBar />
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  )
}


//  :{
//   children: React.ReactNode
// }