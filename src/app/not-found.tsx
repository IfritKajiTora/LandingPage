'use client'

import React, {useEffect} from 'react'
//import { useRouter } from 'next/navigation'
import Image from 'next/image'
import '@/styles/404.css'

export default function PageNotFound() {
  //const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      //Router not working probably because experimental app
      //router.push('/')
      window.location.href = '/'
    }, 5000);

    return () => clearTimeout(timer);
  })

  return (
    <>
      <section className="section100vh overflow-clip" style={{minHeight: '100vh'}}>
        <div className='container mx-auto text-center text-white self-center relative py-[50px] z-10'>
          <div className='light-behind-404'></div>

          <Image src='/img/404/clownSmall.png' alt='clown image' width={400} height={400}
          className='mx-auto mb-8 clownImage'
          />
          <div className='napisyAnimation'>
            <h1 className='text-9xl mb-4'>404</h1>
            <h2 className='text-6xl mb-12'>Cyrk Odjechał Zostawili Klauna</h2>
            <p className='text-3xl'>Nie martw się, zaraz zabiore cię do domu</p>
          </div>

        </div>
      </section>
    </>
  )
}