import type { ThemeMode } from '@/app/types'

import { THEME_MODE } from '@/app/constants'

export const manageThemeMode = {
  get: (): ThemeMode =>
    (localStorage.getItem(THEME_MODE.NAME) || THEME_MODE.DARK) as ThemeMode,
  set: (themeMode: ThemeMode) =>
    localStorage.setItem(THEME_MODE.NAME, themeMode),
}
