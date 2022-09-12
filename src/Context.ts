import { createContext, useContext } from 'react'

interface ContextState {
  isDarkMode?: boolean
  changeThemeMode?: () => void
}

export const ThemeContext = createContext({} as ContextState)

const useThemeContext = () => useContext(ThemeContext)

export default useThemeContext
