import { type PropsWithChildren, useEffect, useState } from 'react'

import { ThemeProvider } from 'styled-components'

import type { ThemeMode } from '@/app/types'

import { THEME_MODE } from '@/app/constants'
import { themeDark, themeLight } from '@/app/providers/theme/config'
import { GlobalStyles } from '@/app/styles'
import { manageThemeMode } from '@/app/utils'

import { ThemeContext } from './ThemeContext.tsx'

export const AppThemeProvider = ({ children }: PropsWithChildren) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(THEME_MODE.LIGHT)

  useEffect(() => {
    const themeModeLocal = manageThemeMode.get()

    setThemeMode(themeModeLocal)
  }, [])

  const changeTheme = () => {
    const themeModeLocal =
      themeMode === THEME_MODE.DARK ? THEME_MODE.LIGHT : THEME_MODE.DARK

    setThemeMode(themeModeLocal)
    manageThemeMode.set(themeModeLocal)
  }

  const theme = themeMode === THEME_MODE.DARK ? themeDark : themeLight

  return (
    <ThemeContext.Provider value={{ changeTheme, themeMode }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
