'use client'

import React, {useState} from 'react'
import Image from 'next/image'

export default function Hidden7thskill() {
  const [hiddenSkill, setHiddenSkill] = useState<boolean>(false);

  return (
    <>
    <div className={`hidden-skill-div ${hiddenSkill ? 'active-hidden-div' : ''}`} onClick={() => setHiddenSkill(prev => !prev)}>
							<Image 
							className='hidden-skill-icon'
							src="/img/skills/doom-eternal.png" 
							width={50} height={50}
							alt='Doom Eternal icon'
							/>
							<p>{hiddenSkill ? <b>ACTIVATED</b> : 'Hidden Skill'}</p>
						</div>

	          <div className={`skill-div skill-7 ${hiddenSkill ? 'animate-hidden-skill' : 'hide-skill'}`}>
							<Image className="skill-icon" src="/img/skills/doom-eternal.png" 
							width={100} height={100}
							alt='Doom Eternal icon'
							/>
		            <p className="skillTitle">Doom Eternal</p>
		            <p className="skillLevel"><span className="falseSkill">Expert</span><span className="trueSkill">Doom Slayer</span></p>
		             <div className="skillDots">
			             	<div className="slayer">
			             		<div className="slayer-move">
				              <div className="skillDotFill"></div>
				              <div className="skillDotFill"></div>
				              <div className="skillDotFill"></div>
				              <div className="skillDotFill"></div>
				              <div className="skillDotFill"></div>
				              <div className="skillDotFill"></div>
				            </div>
			            </div>
		            </div>
	          </div>
    </>
  )
}
