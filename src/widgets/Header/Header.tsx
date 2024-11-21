import React from "react"
import { S } from "./header.styles"
import { ContainerStyles } from "@/shared/ui/Container/container.styles"
import logo from "@/shared/assets/images/logo.webp"
import themeColor from "@/shared/assets/icons/theme-color.svg"
import { Button } from "@/shared/ui/Button/Button"
import { AppRootState } from "@/app/types/types"
import { logout } from "@/entities/reducers/authReducer"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import HeaderSearch from "@/widgets/Header/HeaderSearch"

class Header extends React.Component<Props> {

  render() {
    const {
      changeTheme,
      isLoggedIn,
      currentUserId,
      logout,
    } = this.props
    const logoutHandler = () => {
      logout()
    }

    return (
      <S.Header>
        <ContainerStyles>
          <S.HeaderWrap>
            <a href="/public#">
              <img src={logo} alt="logo" />
              <span>SocialNetwork</span>
            </a>
              <HeaderSearch/>
            <ul>
              <li>
                <Button children="RU" onClick={() => {
                }} />
              </li>
              <li>
                <Button children="EN" onClick={() => {
                }} />
              </li>
            </ul>
            <Button onClick={changeTheme}>
              <img src={themeColor} alt="Change color mode" />
            </Button>
            {isLoggedIn && (
              <div>
                <Link to={`/profile/${currentUserId}`}>Profile</Link>
                <Button children="Logout" onClick={logoutHandler} />
              </div>
            )}
          </S.HeaderWrap>
        </ContainerStyles>
      </S.Header>
    )
  }
}

const mapStateToProps = (state: AppRootState) => ({
  isLoggedIn: state.auth.isLoggedIn,
  currentUserId: state.auth.currentUserId,
})


type Props = {
  changeTheme: () => void
  logout: () => Promise<void>
  isLoggedIn: boolean
  currentUserId: string
}

export default connect(mapStateToProps, { logout })(Header)