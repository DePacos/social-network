import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      body: string
      bgPrimary: string
      bgSecondary: string
      fontPrimary: string
      fontSecondary: string
      overlay: string
    }
  }
}
