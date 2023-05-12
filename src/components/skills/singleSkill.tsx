import React from 'react'
import Image from 'next/image'

interface skill {
  skillNumber: number;
  skillIcon: string;
  iconWidth: number;
  iconHeight: number;
  iconAlt: string;
  title: string;
  level: string;
  rate: 1 | 2 | 3 | 4 | 5;
}

export default function Skill(props: skill) {
  const dotFill = props.rate;
  const dotFillArray = Array(dotFill).fill(null);

  const dotEmpty = 5 - props.rate;
  const dotEmptyArray = Array(dotEmpty).fill(null)

  return (
    <div className={`skill-${props.skillNumber} skill-div`} title={props.title}>
			<Image className="skill-icon" src={props.skillIcon} 
				width={props.iconWidth} height={props.iconHeight} 
				alt={props.iconAlt}
			/>
		  <p className="skillTitle">{props.title}</p>
		  <p className="skillLevel">{props.level}</p>
		  <div className="skillDots">
        {dotFillArray.map((dot, index) => (
          <div key={index} className='skillDotFill'></div>
        ))}
        {dotEmptyArray.map((dot, index) => (
          <div key={index} className='skillDotEmpty'></div>
        ))}
		  </div>
	  </div>
  )
}
