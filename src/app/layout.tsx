import '@/styles/globals.css'
import { Metadata } from 'next'
import { Stick_No_Bills } from 'next/font/google'

const font = Stick_No_Bills({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React/Next Portfolio',
  description: 'Landing page Damian React.js/Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={font.className}>
        {children}
        </body>
    </html>
  )
}
