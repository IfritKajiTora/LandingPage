import React from 'react'
import '@/styles/404.css'
import Image from 'next/image'

export default function Loading() {
  return (
    <section className='section100vh overflow-clip'  style={{minHeight: '100vh'}}>
      <div className='container mx-auto self-center text-white text-center relative z-10 py-[50px]'>
      <h1 className='text-9xl animate-letters'>
          <span style={{animationDelay: '0.15s'}}>L</span>
          <span style={{animationDelay: '0.3s'}}>O</span>
          <span style={{animationDelay: '0.45s'}}>A</span>
          <span style={{animationDelay: '0.6s'}}>D</span>
          <span style={{animationDelay: '0.75s'}}>I</span>
          <span style={{animationDelay: '0.9s'}}>N</span>
          <span style={{animationDelay: '1.05s'}}>G</span>
        </h1>
        <div className='relative mt-[50px]'>
        <div className='pomaranczaDiv'>
          <p className='pomaranczaNapis'>Masz poczęstuj się</p>
          <p className='pomaranczaNapisHover'>NIE DLA PSA!</p>
          <Image src='/img/loading/pomarancza.png' alt='Ręka z pomarańcza w dłoni' width={510} height={240} />
        </div>
        </div>

        <div className='light-behind-404'></div>
      </div>
    </section>
  )
}
