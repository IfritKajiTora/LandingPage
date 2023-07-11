import {Project} from '@/constants/portfolio/types/types'

const ReactNext:Project[] = [
  {
    id: 1,
    bgImage: '/img/portfolio/LandingPagePortfolio.jpg',
    link: 'https://landing-page-xi-indol.vercel.app/',
    title: 'Landing Page Portfolio',
    info: 'React\nNext\nTypeScript\nTailwind',
    target: '_self',
    github: 'https://github.com/IfritKajiTora/LandingPage'
    },{
      id: 2,
      bgImage: '/img/portfolio/pogoda-na-pomorzu.jpg',
      link: 'https://pogoda-na-pomorzu.vercel.app/',
      title: 'Pogoda na Pomorzu',
      info: 'React\nNext\nTypeScirpt\nTailwind',
      target: '_blank',
      github: 'https://github.com/IfritKajiTora/pogoda-na-pomorzu'
    },{
      id: 3,
      bgImage: '/img/portfolio/redux-toolkit-shop.jpg',
      link: 'https://redux-toolkit-shop.vercel.app/',
      title: 'Redux Toolkit Shop',
      info: 'React (Vite)\nTypeScirpt\nReact Redux\nRedux Toolkit\nReact Query\nReact Bootstrap',
      target: '_blank',
      github: 'https://github.com/IfritKajiTora/Redux-toolkit-shop'
    }
  /*{
  id: 4,
  bgImage: '/img/portfolio/questionPage.jpg',
  link: '/not-yet-made',
  title: 'W trakcie tworzenia',
  info: 'React\nNext\nTypeScript\nTailwind',
  target: '_self'
  }*/
]

export default ReactNext;