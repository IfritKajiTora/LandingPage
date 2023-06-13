import Navbar from '@/components/NavbarMenu'
import Banner from '@/components/Banner'
import Skills from '@/components/skills'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Kontakt'
import Footer from '@/components/Footer'

//const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
export default function Index() {
  //await delay(100000);

  return (
    <>
      <Navbar/>
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
