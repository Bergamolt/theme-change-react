import { ReactNode, useEffect, useState } from 'react'
import { ThemeContext } from './Context'

type Props = {
  insertAt?: 'html' | 'body'
  children: ReactNode
}

const ThemeProvider = (props: Props) => {
  const { insertAt = 'html', children } = props

  const [isDarkMode, setIsDarkMode] = useState(false)

  const changeThemeMode = () => {
    setIsDarkMode(!isDarkMode)
    localStorage.setItem('TCR_DARK_MODE', `${!isDarkMode}`)
  }

  useEffect(() => {
    const html = document?.querySelector(insertAt)

    html?.setAttribute('data-theme', isDarkMode ? 'dark' : 'light')

    // @ts-ignore
    const isDarkThemeStorage = JSON.parse(localStorage.getItem('TCR_DARK_MODE'))
    const themeMode = window.matchMedia('(prefers-color-scheme: dark)')

    const onThemeMode = () => setIsDarkMode(isDarkThemeStorage ?? themeMode.matches)

    if (isDarkThemeStorage === null) {
      setIsDarkMode(themeMode.matches)

      themeMode.addEventListener('change', onThemeMode)
    } else {
      setIsDarkMode(isDarkThemeStorage)
    }

    return () => removeEventListener('change', onThemeMode)
  }, [isDarkMode])

  return <ThemeContext.Provider value={{ isDarkMode, changeThemeMode }}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
