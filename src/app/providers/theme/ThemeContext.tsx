import { createContext } from 'react'

import type { ThemeModeContext } from '@/app/types'

import { THEME_MODE } from '@/app/constants'

export const ThemeContext = createContext<ThemeModeContext>({
  changeTheme: () => {},
  themeMode: THEME_MODE.DARK,
})
