import React from 'react'
import AllSkills from '@/components/skills/skills'
import '@/styles/skills.css'

export default function Skills() {

  return (
    <section className="bg-skills" id="skills">
			<div className="container mx-auto relative py-[50px] self-center text-center">
				<h2 className="title">Umiejętności</h2>
				<p className="text">Mam doświadczenie w pracy z <b>HTML</b>, <b>CSS </b>, <b>Bootstrap</b>, 
				<b>JavaScript</b> i <b>jQuery</b>, <b>WordPress</b>, <b>WooCommerce</b>, <b>Advanced Custom fields Pro</b>.
				Aktualnie skupiam się na rozwoju swoich umiejętności w <b>React.js</b> i <b>Next.js</b>, aby stać się jeszcze 
				bardziej wszechstronnym programistą. Stale poszerzam swoją wiedzę i jestem gotowy do nauki nowych technologii.</p>
					
					<AllSkills/>
					
		</div>
	</section>
  )
}
