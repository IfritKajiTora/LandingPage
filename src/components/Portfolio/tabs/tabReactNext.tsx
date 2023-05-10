import React from 'react'
import Strona from './strona'
import reactNext from '@/constants/portfolio/reactNext'

export default function TabReactNext() {
  return (
    <>
      {reactNext.map((element) => {
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
