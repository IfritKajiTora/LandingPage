import '@/styles/globals.css'
import { Metadata } from 'next'
import { Stick_No_Bills } from 'next/font/google'
import Providers from '@/app/[locale]/providers'
import {useLocale} from 'next-intl';
import {notFound} from 'next/navigation';

const font = Stick_No_Bills({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'React/Next Portfolio',
  description: 'Landing page Damian React.js/Next.js',
}

type Layout = {
  children: React.ReactNode,
  params: {locale: string}
}

export default function LocaleLayout({children, params}: Layout) {
  const locale = useLocale();

  if(params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={font.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
