'use client'
import React, { useState, useEffect } from 'react'
import { format } from 'date-fns'
import {pl} from 'date-fns/locale'


export default function MobileDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

	/*PHONE DATE*/
	const dayName = format(date, 'EEEE', { locale: pl, });
	const monthNameShort = format(date, 'MMM', { locale: pl, });
	const dayNumber = format(date, 'd', { locale: pl, });
	const minutes = format(date, 'mm', { locale: pl, });
	const hour = format(date, 'H', { locale: pl, });
	const year = format(date, 'yyyy', { locale: pl, });
  
  return (
    <>
      <div className='mobile-date'>
        <div className='timeContent'>{hour}:{minutes}</div>
        <div className='dateContent'>{dayName}, {dayNumber} {monthNameShort} {year}</div>
      </div>
    </>
  )
}
