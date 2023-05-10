'use client'

import React from 'react'
import AllSkills from '@/components/skills/skills'
import '@/styles/skills.css'

export default function Skills() {

  return (
    <section className="bg-skills" id="skills">
			<div className="container mx-auto relative py-[50px] self-center text-center">
				<h2 className="title">Umiejętności</h2>
				<p className="text">Mam doświadczenie w pracy z <b>WordPress</b> oraz w tworzeniu stron internetowych przy użyciu <b>HTML</b>, <b>CSS</b> 
				i <b>JavaScript</b>. Aktualnie skupiam się na rozwoju swoich umiejętności w <b>React.js</b> i <b>Next.js</b>, aby stać się jeszcze 
				bardziej wszechstronnym programistą. Stale poszerzam swoją wiedzę i jestem gotowy do nauki nowych technologii.</p>
					
					<AllSkills/>
					
		</div>
	</section>
  )
}
