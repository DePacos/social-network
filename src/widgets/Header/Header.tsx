import React from "react"
import { S } from "./Header_Styles"
import { Container } from "../../shared/ui/Container/Container"
import logo from "../../shared/assets/images/logo.webp"
import themeColor from "../../shared/assets/icons/theme-color.svg"
import { Button } from "../../shared/ui/Button/Button"
import { AppRootState } from "../../app/types/types"
import { logout } from "../../entities/reducers/authReducer"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

class Header extends React.Component<Props> {
  render() {
    const { changeTheme, isLoggedIn, currentUserId } = this.props
    const logoutHandler = () => {
      this.props.logout()
    }
    return (
      <S.Header>
        <Container>
          <S.HeaderWrap>
            <a href="/public#">
              <img src={logo} alt="logo" />
              <span>SocialNetwork</span>
            </a>
            <input
              type="search"
              name="search"
              id="searchId"
              placeholder="search"
            />
            <ul>
              <li>
                <Button children="RU" onClick={() => {}} />
              </li>
              <li>
                <Button children="EN" onClick={() => {}} />
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
        </Container>
      </S.Header>
    )
  }
}

const mapStateToProps = (state: AppRootState) => ({
  isLoggedIn: state.auth.isLoggedIn,
  currentUserId: state.auth.currentUserId,
})

const mapDispatchToProps = {
  logout: logout,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)

type Props = {
  changeTheme: () => void
  logout: () => Promise<void>
  isLoggedIn: boolean
  currentUserId: string
}
