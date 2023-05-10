'use client'

import React from 'react'
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';


export default function Hand() {
  const {ref: handObserver, inView: handVisible} = useInView({threshold: 0.5});

  return (
    <div className={`relative self-center ${handVisible ? 'visible' : ''}`} ref={handObserver}>
			<div className="max-content-size">
				<div className="bg-radiant-gradient"></div>
					<div className="cards-div">
						<div className="rounded-ball ball-large"></div>
						<div className="rounded-ball ball-medium"></div>
						<div className="rounded-ball ball-small"></div>
						<div className="cards">
							<div className="card-layer-1">
							</div>
						<div className="card-layer-2">
							<Image src="/img/banner/layer2.jpg" className="layer-img"
								width={240} height={360}
								alt="phone screen layer 2"
							/>
						</div>
						<div className="card-layer-3">
							<Image src="/img/banner/layer3.jpg" className="layer-img"
								width={240} height={360}
								alt='phone screen layer 3'
								priority
							/>
						</div>
					</div>
				</div>
				<div className="cut-hand-smooth">
					<div className='hand-animate'>
						<Image className="hand-image" src="/img/banner/robothandpng.png"
							width={800} height={320}
							priority
							alt='Futuristic robotic hand'
						/>
					</div>
				</div>
			</div>
		</div>
  )
}
