
import React from 'react';
import pick from 'lodash/pick';
import {useLocale, NextIntlClientProvider} from 'next-intl';
import NavbarMenu from '@/components/NavbarMenu/navbar'

export default async function Navbar(){
  const locale = useLocale();
  const messages = (await import(`@/language/${locale}.json`)).default;

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={pick(messages, 'Navbar')}>
        <NavbarMenu lang={locale}/>
      </NextIntlClientProvider>
    </>
  )
}
