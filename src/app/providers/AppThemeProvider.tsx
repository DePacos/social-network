import { ReactNode, useContext, useEffect, useState } from 'react'

import { socialThemeDark } from '@/app/styles/themeDark.styles'
import { socialThemeLight } from '@/app/styles/themeLight.styles'
import { manageThemeMode } from '@/app/utils/manageThemeMode'
import { ThemeProvider } from 'styled-components'

import { ThemeContext } from './ThemeContext'

export const AppThemeProvider = ({ children }: { children: ReactNode }) => {
  const themeContext = useContext(ThemeContext)

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

  const theme = themeMode === 'dark' ? socialThemeDark : socialThemeLight

  return (
    <ThemeContext.Provider value={{ changeTheme, themeMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
