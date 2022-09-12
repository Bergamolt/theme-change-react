import { createContext, useContext } from 'react'

interface ContextState {
  isDarkMode?: boolean
  changeThemeMode?: () => void
}

export const Context = createContext({} as ContextState)

const useChangeTheme = () => useContext(Context)

export default useChangeTheme
