import { createContext } from 'react'

import { ThemeModeContext } from '@/app/types/types'

export const ThemeContext = createContext<ThemeModeContext>({
  changeTheme: () => null,
  themeMode: 'dark',
})
