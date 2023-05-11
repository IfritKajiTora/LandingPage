'use client'

import React from 'react'
import SingleSkill from '@/components/skills/singleSkill'
import Hidden7thSkill from '@/components/skills/hidden7thskill'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'


export default function Skills(){
  const {ref: skillsObserver, inView: skillsVisible } = useInView({threshold: 0.5});

  return (
    <>
    <div className="skills-padding">
    <div className={`skills-content ${skillsVisible ? 'visible' : ''}`} ref={skillsObserver}>
					<div id="skills-title">
						<h2>MY SKILLS
						<Image src='/img/skills/hands.png' className='skillsHands' alt='hands together holding' width={500} height={259}/>
						<div className='skill-title-bg-transparent'></div>
						</h2>
					</div>

					<SingleSkill 
						skillNumber={1} 
						skillIcon='/img/skills/react.svg' 
						iconWidth={112} iconHeight={100} 
						iconAlt='react icon' 
						title='React' 
						level='Beginner' 
						rate={1}
					/>

					<SingleSkill 
						skillNumber={2} 
						skillIcon='/img/skills/typescript.svg' 
						iconWidth={100} iconHeight={100} 
						iconAlt='TypeScript icon' 
						title='TypeScript' 
						level='Beginner' 
						rate={1}
					/>

					<SingleSkill 
						skillNumber={3} 
						skillIcon='/img/skills/next.svg' 
						iconWidth={160} iconHeight={100} 
						iconAlt='next icon' 
						title='Next' 
						level='Beginner' 
						rate={1}
					/>

					<SingleSkill 
						skillNumber={4} 
						skillIcon='/img/skills/javascript.svg' 
						iconWidth={100} iconHeight={100} 
						iconAlt='JavsScript icon' 
						title='JavaScript'
						level='Junior' 
						rate={2}
					/>

					<SingleSkill 
						skillNumber={5} 
						skillIcon='/img/skills/wordpress.svg' 
						iconWidth={100} iconHeight={100} 
						iconAlt='Wordpress icon' 
						title='Wordpress'
						level='Regular' 
						rate={3}
					/>

					<SingleSkill 
						skillNumber={6} 
						skillIcon='/img/skills/css-html.svg' 
						iconWidth={153} iconHeight={100} 
						iconAlt='css & html icon' 
						title='CSS / HTML'
						level='Regular' 
						rate={3}
					/>

						<Hidden7thSkill/>

	      </div>
      </div>
    </>
  )
}
