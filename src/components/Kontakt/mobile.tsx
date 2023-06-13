'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import {useInView} from 'react-intersection-observer'
import MobileIcon from './mobileIcon'
import dynamic from 'next/dynamic';
import '@/styles/kontakt.css'

const MobileDate = dynamic(
    () => import('@/components/Kontakt/mobileDate'),
    { ssr: false }
)

export default function Mobile() {
  const {ref: phoneRef, inView: phoneVisible} = useInView({threshold: 0.5});
	const [phoneScreen, setPhoneScreen] = useState(false);

	const infoMobileOnClick = "If you received a link to the website, you also received my CV with a phone number and e-mail address, I don't want to publicly give acces to my phone or e-mail"

  return (
    <>
		<div className='mobile-hover'>
			<div className='bg-radiant-gradient-phone'></div>

			<div className={`phoneAnimate ${phoneVisible ? 'visible' : ''}`} ref={phoneRef}>
				<div className={`mobile-design ${phoneScreen ? 'mobile-background-hide' : ''}`}>
					<div className="phone-border"></div>
					<div className='mobile-background-div'>
						<Image className='mobile-background' src='/img/kontakt/mobile-background.jpg' alt='phone background image mountains' width={951} height={634}/>
					</div>

					<div className='obramowanie'></div>

					<div className='silver-shine-div'>
						<div className='silver-shine'></div>
					</div>

					<div className='mobile-button-side first'></div>
					<div className='mobile-button-side second'></div>
					<div onMouseUp={() => setPhoneScreen(change => !change)} className='mobile-button-side third'></div>

				<div className='mobile-top'>
					<div className='mobile-top-element-1'></div>
					<div className='mobile-top-element-2'></div>
					<div className='mobile-top-element-3'></div>
				</div>

				<div className={`${phoneScreen ? 'screenOFF' : ' '} mobile-content`} id='phoneScreen'>
					<MobileDate/>
					<div className='mobile-icons'>
						<MobileIcon infoOnClick={infoMobileOnClick} hrefType='mailto' link='pawlo...' img='/img/kontakt/mail.svg' bgColor='#016ad7' title='E-mail' alt='mail icon' imgWidth={200} imgHeight={200}/>
						<MobileIcon infoOnClick={infoMobileOnClick} hrefType='tel' link='+4851474...' img='/img/kontakt/phone.png' bgColor='#016ad7' title='Phone' alt='Phone icon' imgWidth={200} imgHeight={200}/>
						<MobileIcon link='https://github.com/IfritKajiTora' img='/img/kontakt/github.svg' rel='nofollow' target="_blank" bgColor='#016ad7' title='GitHub' alt='GitHub icon' imgWidth={200} imgHeight={200}/>
					</div>
				</div>

				<div className='mobile-bottom'>
					<div className='mobile-bottom-element-1'></div>
					<div className='mobile-bottom-element-2'></div>
					<div className='mobile-bottom-element-3'></div>
				</div>
				
			</div>
		</div>

	</div>
	</>
  )
}
