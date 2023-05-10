import React from 'react'
import Strona from './strona'
import wordpress from '@/constants/portfolio/wp'

export default function TabWordpress() {
  return (
    <>
      {wordpress.map((element) => {
        return(
          <Strona 
            {...element}
            key={element.id}
            delay={element.id}
          />
          )
      })}
    </>
  )
}
