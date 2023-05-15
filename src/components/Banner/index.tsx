import React from 'react'
import Hand from '@/components/Banner/hand'
import '@/styles/banner.css'

export default function Banner() {

  return (
    <>
    <section className="section100vh" id="banner">
			<div className="container self-center">
				<div className="block lg:grid lg:grid-cols-2 gap-4 py-[50px]">
					<div className="self-center text-center lg:text-left relative z-10 pb-[50px] lg:pb-[0]">
						<h1 className="bannerTitle">Front-End Wordpress React Next.js Developer</h1>
						<p className="bannerText">Witaj! Mam na imię Damian, mam doświadczenie w pracy  <span className='whitespace-nowrap'>na Wordpressie</span>
						 <span className='whitespace-nowrap'> i jestem</span> początkującym React/Next developerem. 
						Ta strona została wykonana  <span className='whitespace-nowrap'>przy użyciu</span> React.js, Next.js oraz TypeScript.<br/><br/>
							Wszystkie animacje na stronie zostały stworzone przy pomocy CSS, co pozwoliło uzyskać ciekawe i interaktywne efekty.</p>
					</div>

					<Hand/>

				</div>
			</div>
		</section>
    </>
  )
}
