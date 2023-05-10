import React from 'react'
import Strona from './strona'
import htmlCss from '@/constants/portfolio/htmlCss'

export default function TabHtmlCss() {
  return (
    <>
      {htmlCss.map((element) => {
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
