//Layout
import NavBar from '@/components/NavbarMenu'
import Banner from '@/components/Banner'
import Skills from '@/src/components/skills'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Kontakt'
import Footer from '@/components/Footer'

export default function Home() {
 
  return (
    <>
      <NavBar/>
      <main className='overflow-clip'>
        <Banner/>
        <Skills/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </main>
    </>
  )
}
