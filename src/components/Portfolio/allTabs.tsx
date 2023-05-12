'use client'
import React, {useState} from 'react'
import { useInView } from 'react-intersection-observer'
import dynamic from'next/dynamic'

const Woocommerce = dynamic(() => import('@/components/Portfolio/tabs/tabWordpressWoocommerce'), {
  ssr:false, loading: () => <p className='text-center title absolute left-0 right-0 top-0 animate-pulse'>LOADING</p>
})
const Wordpress = dynamic(() => import('@/components/Portfolio/tabs/tabWordpress'), {
  ssr:false, loading: () => <p className='text-center title absolute left-0 right-0 top-0 animate-pulse'>LOADING</p>
})
const ReactNext = dynamic(() => import('@/components/Portfolio/tabs/tabReactNext'), {
  ssr:false, loading: () => <p className='text-center title absolute left-0 right-0 top-0 animate-pulse'>LOADING</p>
})
const HtmlCss = dynamic(() => import('@/components/Portfolio/tabs/tabHtmlCss'), {
  ssr:false, loading: () => <p className='text-center title absolute left-0 right-0 top-0 animate-pulse'>LOADING</p>
})

export default function Tabs() {
  const {ref: portfolioRef , inView: portfolioVisible} = useInView({threshold: 0.5, triggerOnce:true});
  const [tab, changeTab] = useState<string>('woocommerce');

  return (
    <>
     <div className='grid sm:grid-cols-2 lg:grid-cols-4 pt-[50px]'>
        <div className={`linkTab ${tab == 'react/next' ? 'active' : ''}`} onClick={() => changeTab('react/next')}>React/Next</div>
        <div className={`linkTab ${tab == 'wordpress' ? 'active' : ''}`} onClick={() => changeTab('wordpress')}>Wordpress</div>
        <div className={`linkTab ${tab == 'woocommerce' ? 'active' : ''}`} onClick={() => changeTab('woocommerce')}>Woocommerce</div>
        <div className={`linkTab ${tab == 'html/css' ? 'active' : ''}`} onClick={() => changeTab('html/css')}>HTML/CSS</div>
      </div>

      <div ref={portfolioRef} className={`pt-[50px] ${portfolioVisible ? 'visible' : ''}`}>
        <div className='tab tab-visible'>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 relative'>
            {portfolioVisible && tab == 'woocommerce' && <Woocommerce/>}
            {portfolioVisible && tab == 'react/next' && <ReactNext/>}
            {portfolioVisible && tab == 'wordpress' && <Wordpress/>}
            {portfolioVisible && tab == 'html/css' && <HtmlCss/>}
          </div>
        </div>
      </div>
    </>
  )
}
