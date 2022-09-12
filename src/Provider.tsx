import { ReactNode, useEffect, useState } from 'react'
import { Context } from './Context'

type Props = {
  isSystemDefault?: boolean
  insertAt?: 'html' | 'body'
  children: ReactNode
}

const Provider = (props: Props) => {
  const { isSystemDefault = true, insertAt = 'html', children } = props

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

    if (isSystemDefault && isDarkThemeStorage === null) {
      setIsDarkMode(themeMode.matches)

      themeMode.addEventListener('change', onThemeMode)
    } else {
      setIsDarkMode(isDarkThemeStorage)
    }

    return () => removeEventListener('change', onThemeMode)
  }, [isDarkMode])

  return <Context.Provider value={{ isDarkMode, changeThemeMode }}>{children}</Context.Provider>
}

export default Provider
