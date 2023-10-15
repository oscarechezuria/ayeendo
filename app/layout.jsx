import GlobalProvider from '@/context/GlobalContext'
import { CalendarProvider } from '@/context/CalendarContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AYEENDO',
  description: 'Potenciar a los profesionales independiates de la salud con tecnología de calidad. Lleva tu consultorio al siguiente nivel',
}

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
          <CalendarProvider>
            {children}
          </CalendarProvider>
        </GlobalProvider>
      </body>
    </html>
  )
}
