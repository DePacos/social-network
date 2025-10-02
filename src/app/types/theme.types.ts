import { THEME_MODE } from '@/app/constants'

export type ThemeMode = typeof THEME_MODE.LIGHT | typeof THEME_MODE.DARK

export type ThemeModeContext = {
  changeTheme: () => void
  themeMode: ThemeMode
}
