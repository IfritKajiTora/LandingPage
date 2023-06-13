'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { BsSunFill, BsMoonStarsFill} from 'react-icons/bs'
import '@/styles/themeSwitcher.css'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null;
  }

  return (
    <>
    <div id="themeSwitcher">
      <div className={`themeSwitcher ${theme === 'dark' ? 'darkMode' : 'lightMode'}`} onClick={(event: React.MouseEvent<HTMLDivElement>) => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        <div className={`themeSwitcher_ball ${theme === 'dark' ? 'ballDark' : 'ballLight'}`}></div>
        <div className='themeSwitcher_icon moon'><BsMoonStarsFill className='moonIcon'/></div>
        <div className='themeSwitcher_icon sun'><BsSunFill className='sunIcon'/></div>
      </div>
    </div>
    </>
  )
}

export default ThemeSwitch