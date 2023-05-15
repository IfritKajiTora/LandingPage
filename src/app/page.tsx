import NavBar from '@/components/NavbarMenu'
import Banner from '@/components/Banner'
import Skills from '@/src/components/skills'
import Portfolio from '@/components/Portfolio'
import Contact from '@/components/Kontakt'
import Footer from '@/components/Footer'

//const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export default async function Home() {
  //await delay(100000);

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
