import { Component, ReactNode } from "react"
import { ThemeContext } from "./ThemeContext"
import { manageThemeMode } from "@/app/utils/manageThemeMode"

export class AppThemeProvider extends Component<{children: ReactNode}, {themeMode: string}>{
  state = {
    themeMode: '',
  }

  componentDidMount() {
    const themeMode = manageThemeMode.get()
    this.setState({ themeMode })
  }

  changeTheme = () => {
    const themeMode = this.state.themeMode === 'dark' ? 'light' : 'dark'
    this.setState({ themeMode })
    manageThemeMode.set(themeMode)
  }

  render() {
    return (
      <ThemeContext.Provider value={{ themeMode: this.state.themeMode, changeTheme:this.changeTheme }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
