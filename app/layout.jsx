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
        <HeaderBar />
        <div className='flex h-screen'>
          <Navigation />
          <div className='content m-8 p-4 bg-cream text-black rounded-t-2xl w-full'>
            {children}
          </div>
        </div>

      </body>
    </html>
  )
}


//  :{
//   children: React.ReactNode
// }