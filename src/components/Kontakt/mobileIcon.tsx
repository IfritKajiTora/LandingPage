import React from 'react'
import Image from 'next/image'

type MobileIcon = {
	title: string, 
	bgColor: string, 
	img: string, 
	alt: string, 
	imgWidth: number, 
	imgHeight: number,
	link: string,
	hrefType?: string,
  infoOnClick?: string,
  rel?: string,
  target?: string
}

export default function MobileIcon(props: MobileIcon) {

  return (
    <>
      <a
        href={`${props.hrefType ? `${props.hrefType}:` : ''}${props.link}`} 
        onClick={props.infoOnClick ? (e) => {e.preventDefault(); alert(props.infoOnClick)} : undefined}
        target={props.target || '_self'}
        rel={props.rel || ''}
        className='mobile-icon'
      >
        <div className='mobile-element-icon' style={{ backgroundColor: props.bgColor }}>
          <Image src={props.img} alt={props.alt} width={props.imgWidth} height={props.imgHeight} />
        </div>
        <p>{props.title}</p>
      </a>
    </>
  );
}