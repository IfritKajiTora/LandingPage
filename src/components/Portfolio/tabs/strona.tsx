import React from 'react'
import Image from 'next/image'

type Strona = {
  title:string,
  bgImage: string,
  link: string,
  info: string,
  delay: number,
  github?: string,
  target?: string,
  rel?: string | undefined
}

export default function Strona(props: Strona) {
  return (
    <>
      <div className='portfolioSiteAnimate' style={{animationDelay: `${(props.delay * 0.2).toFixed(1)}s`}}>
        <div className='portfolioWebsite'>
          <Image src={props.bgImage} className='portfolioImage' width={500} height={334} alt={props.title} />
          <a href={props.link} className='portfolioLink' 
            target={`${props?.target ? props.target : '_blank'}`} 
            rel={`${props.rel ? props.rel : 'noopener nofollow noreferrer'}`}
          >
            {props.github
            ? <>
              <a className='github_repo_link' rel='nofollow' target="_blnak" href={props.github}>
                <Image width={40} height={40} src='/img/kontakt/github.svg' alt='github icon'/>
              </a>
            </>
            : null}

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
