import React from 'react'
import Mobile from '@/components/Kontakt/mobile'
import '@/styles/kontakt.css'


export default function Kontakt() {

  return (
    <>
			<section className='section100vh' id="kontakt">
				<div className='container py-[50px] self-center block lg:grid lg:grid-cols-2 xl:grid-cols-12 gap-4'>

					<div className='text-center lg:text-left self-center relative z-index-1 xl:col-span-7'>
						<h2 className='title pt-[5px] lg:pt-0'>Kontakt</h2>
						<p className='text'>Jestem młodym, ambitnym Developerem i szukam długoterminowej współpracy jako Wordpress lub Junior React/Next developer,
							gdzie będę miał mozliwość rozwijać się w tej dynamicznie rozwijającej branży. Jestem otwarty na szkolenia 
							i jestem gotów dostosować się do Państwa potrzeb, aby osiągnąć wspólne cele.
						<br/><br/>
						Jeśli chcielibyście Państwo przyjąć mnie do swojego zespołu, serdecznie zachęcam do 
						kontaktu ze mną za pośrednictwem telefonu lub poczty elektronicznej.</p>
					</div>

					<div className='text-center self-center py-[50px] xl:col-span-5'>
						<div className='mobile-hover'>
							<div className='bg-radiant-gradient-phone'></div>

							<Mobile/>
								
						</div>
					</div>
				</div>
			</section>
    </>
  )
}
