import { type DefaultTheme } from 'styled-components'

export const themeDark: DefaultTheme = {
  colors: {
    body: '#003344',
    bgPrimary: '#0b566c',
    bgSecondary: '#353535',
    fontPrimary: '#fff',
    fontSecondary: '#222',
    overlay: 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8))',
  },
}

export const themeLight: DefaultTheme = {
  colors: {
    body: '#e7e7e7',
    bgPrimary: '#fff',
    bgSecondary: '#5bbedc',
    fontPrimary: '#222',
    fontSecondary: '#fff',
    overlay:
      'linear-gradient(rgba(200, 200, 200, 0.8), rgba(200, 200, 200, 0.8))',
  },
}
