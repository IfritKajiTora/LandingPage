'use client'
import React, {useState} from 'react';
import {useTranslations} from 'next-intl';
import Link from 'next/link'
import ThemeSwitcher from '@/app/[locale]/themeSwitcher'
import { FaReact, FaWhmcs, FaToolbox, FaMobileAlt, FaBars, FaRegWindowClose } from 'react-icons/fa'
import '@/styles/navbar.css'
import '@/styles/languageSwitcher.css'


export default function NavbarMenu({lang} : {lang:string}) {
  const [navbarMobile, setNavbarMobile] = useState(false);
  const t = useTranslations('Navbar');

  return (
    <>
      <nav className="navbarFloat">
        <div className="navbarStyle">

          <ul className={`navbarList ${navbarMobile ? 'visible' : ''}`}>
            
            <li className='themeSwitcherLi'>
              <ThemeSwitcher/>
            </li>

            <li className='languageLi'>
              <Link href='/pl' className={`languageChoice ${lang === 'pl' ? 'active' : ''}`}>
                PL
              </Link>
              <Link href='/en' className={`languageChoice ${lang === 'en' ? 'active' : ''}`}>
                EN
              </Link>
            </li>

            <li>
              <a href="#banner">
                <FaReact className='sectionIcon'/>
                <p className='sectionName'>{t('banner')}</p>
              </a>
            </li>

            <li>
              <a href="#skills">
                <FaWhmcs className='sectionIcon'/>                  
                <p className='sectionName'>{t('skills')}</p>
              </a>
            </li>

            <li>
              <a href="#projects">
                <FaToolbox className='sectionIcon'/>
                <p className='sectionName'>{t('projects')}</p>
              </a>
            </li>

            <li>
              <a href="#kontakt">
                <FaMobileAlt className='sectionIcon'/>
                <p className='sectionName'>{t('contact')}</p>
               </a>
            </li>
          </ul>
          <div className='hamburgerNav' onClick={() => setNavbarMobile(prev => !prev)}>
            {navbarMobile ? <FaRegWindowClose/> : <FaBars/>}
          </div>
        </div>
      </nav>
    </>
  );
}