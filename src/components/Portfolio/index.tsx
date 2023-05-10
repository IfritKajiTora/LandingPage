import React from 'react'
import '@/styles/portfolio.css'
import AllTabs from '@/components/Portfolio/allTabs'

export default function Portfolio() {
  return (
    <>
    <section className='text-white' id="projects">
      <div className='container py-[50px] text-center'>
        <h2 className='title'>Portfolio</h2>
        <p className='text'>
          W mojej pracy jako twórca stron internetowych wykonałem wiele
          projektów dla klientów o różnych wymaganiach. Dla tych, którzy
          potrzebowali możliwości dodawania treści, takich jak artykuły
          lub <b>wpisy</b> na <b>blog</b>, zdecydowałem się na wykorzystanie popularnego
          systemu zarządzania treścią, jakim jest <b>WordPress</b>.<br/><br/>
          W wielu projektach skorzystałem z wtyczki <b>Advanced Custom Fields Pro</b>,
          co umożliwiło klientom dodawanie lub edytowanie tytułów, treści,
          obrazów oraz innych elementów z łatwością z poziomu panelu <b>CMS</b>.
          W niektórych projektach, gdzie wymagany był <b>sklep internetowy</b>,
          wykorzystałem wtyczkę <b>WooCommerce</b>, co umożliwiło klientom dodawanie
          nowych produktów oraz zarządzanie sklepem bezpośrednio z poziomu
          panelu administratora.<br/><br/>Stworzyłem również strony internetowe 
          wykorzystując sam <b>HTML</b>, <b>CSS</b> oraz <b>JavaScript</b>
          , aby zapewnić wyjątkowe projekty zgodne z wymaganiami klientów. 
          Linki do niektórych moich prac znajdują się poniżej.
          </p>

          <AllTabs/>

      </div>
    </section>
    </>
  )
}
