'use client'
import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import {pl, enGB} from 'date-fns/locale'


export default function MobileDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

	/*PHONE DATE*/
  const languageHTML = document.documentElement.lang;
  let switchLanguage = pl;
  switch(languageHTML){
    case 'pl': 
      switchLanguage = pl;
      break;
    default: switchLanguage = enGB;
  }

	const dayName = format(date, 'EEEE', { locale: switchLanguage, });
	const monthNameShort = format(date, 'MMM', { locale: switchLanguage, });
	const dayNumber = format(date, 'd', { locale: switchLanguage, });
	const minutes = format(date, 'mm', { locale: switchLanguage, });
	const hour = Number(format(date, 'H', { locale: switchLanguage, }));
	const year = format(date, 'yyyy', { locale: switchLanguage, });
  const hourAM_PM = hour % 12;
  
  return (
    <>
      <div className='mobile-date'>
        <div className='timeContent'>
          {switchLanguage === pl
          ? <>{hour}:{minutes}</>
          : <>{hourAM_PM}:{minutes} <div className='phoneDateAM-PM'>{hour < 12 ? 'a.m.' : 'p.m.'}</div></>
          }
          
        </div>
        <div className='dateContent'>
          {switchLanguage === pl 
          ? <>{dayName}, {dayNumber} {monthNameShort} {year}</> 
          : <>{dayName}, {monthNameShort} {dayNumber} {year}</>
          }
        </div>
      </div>
    </>
  )
}
