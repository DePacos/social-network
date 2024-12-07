import React from "react"
import { GlobalStyles } from "./styles/global.styles"
import styled, { ThemeProvider } from "styled-components"
import { socialThemeDark } from "./styles/themeDark.styles"
import { socialThemeLight } from "./styles/themeLight.styles"
import { ContainerStyles } from "@/shared/ui/Container/container.styles"
import Header from "@/widgets/Header/Header"
import { Sidebar } from "@/widgets/Sidebar/Sidebar"
import { Article } from "@/widgets/Article/Article"
import { AppRootState, ThemeModeContext } from "./types/types"
import { connect } from "react-redux"
import { me } from "@/entities/reducers/authReducer"
import { changeIsLoading } from "@/entities/reducers/appReducer"
import Skeleton from "react-loading-skeleton"
import Toast from "@/shared/ui/Toast/Toast"
import { Navigate } from "react-router-dom"
import { ThemeContext } from "@/app/providers/ThemeContext"

export class App extends React.Component<Props> {
  static contextType = ThemeContext
  context!: ThemeModeContext

  componentDidMount() {
    this.props.me()
  }

  renderContent() {
    const { isLoggedIn, appError } = this.props

    if (!isLoggedIn) {
      return <Navigate to="/login" />
    }

    return (
      <>
        <Header />
        <main>
          <MainWrap>
            <Sidebar />
            <Article />
          </MainWrap>
          {appError && <Toast error={appError} />}
        </main>
      </>
    )
  }

  render() {
    const { isInitialized } = this.props

    if (!isInitialized) {
      return (
        <div>
          <Skeleton />
        </div>
      )
    }

    return (
      <div className="App">
        <ThemeProvider theme={this.context.themeMode === "light" ? socialThemeLight : socialThemeDark}>
          <GlobalStyles />
          {this.renderContent()}
        </ThemeProvider>
      </div>
    )
  }
}

const MainWrap = styled(ContainerStyles)`
    display: grid;
    grid-template-columns: 300px 1fr;
`

const mapStateToProps = (state: AppRootState) => ({
  isLoggedIn: state.auth.isLoggedIn,
  isInitialized: state.app.isInitialized,
  appError: state.app.appNotifications,
})

type Props = {
  isLoggedIn: boolean
  isInitialized: boolean
  appError: string
  me: () => void
}

export default connect(mapStateToProps, {
  me, changeIsLoading
})(App)
