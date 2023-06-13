'use client'
import {useEffect} from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import '@/styles/404.css'

export default function PageNotFound() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/')
      //window.location.href = '/'
    }, 6000);

    return () => clearTimeout(timer);
  })

  const languageHTML = document.documentElement.lang;

  return (
    <>
      <section className="section100vh overflow-clip" style={{minHeight: '100vh'}}>
        <div className='container mx-auto text-center light:text-black dark:text-white self-center relative py-[50px] z-10'>
          <div className='light-behind-404'></div>

          <Image src='/img/404/clownSmall.png' alt='clown image' width={400} height={400}
          className='mx-auto mb-8 clownImage'
          />
          <div className='napisyAnimation'>
            <h1 className='text-9xl mb-4'>404</h1>
            <h2 className='text-6xl mb-12'>{languageHTML === 'pl' ? 'Cyrk Odjechał Zostawili Klauna' : 'Circus drove away, they left the clown'}</h2>
            <p className='text-3xl'>{languageHTML === 'pl' ? 'Nie martw się, zaraz zabiore cię do domu' : "Don't worry, I will take you back home"}</p>
          </div>

        </div>
      </section>
    </>
  )
}