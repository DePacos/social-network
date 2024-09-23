import React from "react"
import { S } from "./Header_Styles"
import { Container } from "../../shared/ui/Container/Container"
import logo from "../../shared/assets/images/logo.webp"
import themeColor from "../../shared/assets/icons/theme-color.svg"
import { Button } from "../../shared/ui/Button/Button"

type HeaderProps = {
  changeTheme: () => void
}

export const Header = ({ changeTheme }: HeaderProps) => {
  const buttonHandler = () => {}

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
              <Button children="RU" onClick={buttonHandler} />
            </li>
            <li>
              <Button children="EN" onClick={buttonHandler} />
            </li>
          </ul>
          <Button onClick={changeTheme}>
            <img src={themeColor} alt="Change color mode" />
          </Button>
          <Button children="LogIn" onClick={buttonHandler} />
        </S.HeaderWrap>
      </Container>
    </S.Header>
  )
}
