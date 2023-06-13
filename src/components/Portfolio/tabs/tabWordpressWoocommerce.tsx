import React from 'react'
import Strona from './strona'
import wordpressWoocommerce from '@/constants/portfolio/woocommerce'

export default function TabWordpressWoocommerce() {
  return (
    <>
      {wordpressWoocommerce.map((element) => {
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
