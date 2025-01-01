import { ReactNode, useContext, useEffect, useState } from 'react'

import { manageThemeMode } from '@/app/utils/manageThemeMode'

import { ThemeContext } from './ThemeContext'

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const themeContext: { themeMode: string } = useContext(ThemeContext)

  const [themeMode, setThemeMode] = useState(themeContext.themeMode)

  useEffect(() => {
    const themeModeLocal = manageThemeMode.get()

    setThemeMode(themeModeLocal)
  }, [])

  const changeTheme = () => {
    const themeModeLocal = themeMode === 'dark' ? 'light' : 'dark'

    setThemeMode(themeModeLocal)
    manageThemeMode.set(themeModeLocal)
  }

  return (
    <ThemeContext.Provider value={{ changeTheme, themeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
