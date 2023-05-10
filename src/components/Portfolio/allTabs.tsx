'use client'
import React, {useState} from 'react'
import { useInView } from 'react-intersection-observer'
import TabWordpressWoocommerce from './tabs/tabWordpressWoocommerce'
import TabReactNext from './tabs/tabReactNext'
import TabWordpress from './tabs/tabWordpress'
import TabHtmlCss from './tabs/tabHtmlCss'

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

        <div className={`tab ${tab == 'react/next' ? 'tab-visible' : 'tab-hide'}`}>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
            <TabReactNext/>
          </div>
        </div>

        <div className={`tab ${tab == 'woocommerce' ? 'tab-visible' : 'tab-hide'}`}>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
            <TabWordpressWoocommerce/>
          </div>
        </div>

        <div className={`tab ${tab == 'wordpress' ? 'tab-visible' : 'tab-hide'}`}>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
            <TabWordpress/>
          </div>
        </div>

        <div className={`tab ${tab == 'html/css' ? 'tab-visible' : 'tab-hide'}`}>
          <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
            <TabHtmlCss/>
          </div>
        </div>
      </div>
    </>
  )
}
