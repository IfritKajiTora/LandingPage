'use client'

import React, {useState} from 'react';
import '@/styles/navbar.css'
import { FaReact, FaWhmcs, FaToolbox, FaMobileAlt, FaBars, FaRegWindowClose } from 'react-icons/fa'

export default function NavbarMenu() {
  const [navbarMobile, setNavbarMobile] = useState(false);

  return (
    <>
      <nav className="navbarFloat">
        <div className="navbarStyle">

          <ul className={`navbarList ${navbarMobile ? 'visible' : ''}`}>
              
            <li>
              <a href="#banner" className=''>
                <FaReact className='sectionIcon'/>
                <p className='sectionName'>Banner</p>
              </a>
            </li>

            <li>
              <a href="#skills" className=''>
                <FaWhmcs className='sectionIcon'/>                  
                <p className='sectionName'>Skills</p>
              </a>
            </li>

            <li>
              <a href="#projects" className=''>
                <FaToolbox className='sectionIcon'/>
                <p className='sectionName'>Projekty</p>
              </a>
            </li>

            <li>
              <a href="#kontakt" className=''>
                <FaMobileAlt className='sectionIcon'/>
                <p className='sectionName'>Kontakt</p>
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