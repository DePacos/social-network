import { createContext } from "react"
import { ThemeModeContext } from "@/app/types/types"

export const ThemeContext = createContext<ThemeModeContext>({themeMode: 'dark', changeTheme: () => null})