import React from 'react'
import Image from 'next/image'

type Strona = {
  title:string,
  bgImage: string,
  link: string,
  info: string,
  delay: number,
  target?: string,
  rel?: string | undefined
}

export default function Strona(props: Strona) {
  return (
    <>
      <div className='portfolioSiteAnimate' style={{transitionDelay: `${(props.delay * 0.2).toFixed(1)}s`}}>
        <div className='portfolioWebsite'>
          <Image src={props.bgImage} className='portfolioImage' width={500} height={334} alt={props.title} />
          <a href={props.link} className='portfolioLink' 
            target={`${props?.target ? props.target : '_blank'}`} 
            rel={`${props.rel ? props.rel : 'noopener nofollow noreferrer'}`}
          >
            <div className='divContent'>
              <h3 className='portfolioTitle'>{props.title}</h3>
              {props.info && <p className='portfolioInfo'>{props.info}</p>}
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
