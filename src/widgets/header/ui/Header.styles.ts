import styled, { css } from 'styled-components'

const Header = styled.header`
  position: relative;
  border-bottom: 1px solid;
  padding: 20px;
`
const HeaderWrap = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr 65px 55px;
  max-width: 1440px;
  margin: 0 auto;
  gap: 30px;
  align-items: center;

  @media (max-width: 767px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }
`

const HeaderLogo = styled.div`
  font-size: 18px;

  a {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  @media (max-width: 480px) {
    grid-column: 1;
  }
`
const HeaderNav = styled.nav`
  ul {
    display: flex;
    gap: 25px;
    font-size: 18px;
    justify-content: center;
  }

  a {
    position: relative;
  }

  a:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: -5px;
    left: 0;
    background-color: currentColor;
    height: 2px;
    width: 0;
    border-radius: 10px;
    transition: width 0.3s;
  }

  a:hover:after {
    width: 100%;
  }

  @media (max-width: 767px) {
    ul {
      flex-direction: column;
      gap: 15px;
      align-items: center;
    }
  }

  @media (max-width: 480px) {
    grid-column: 1/3;
    grid-row: 3;
  }
`

const HeaderBtn = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'countMessages',
})<{ countMessages: number }>`
  display: flex;
  gap: 15px;

  button:last-child {
    position: relative;
  }

  ${({ countMessages }) =>
    countMessages &&
    css`
      button:last-child:before {
        position: absolute;
        top: -8px;
        right: -5px;
        content: '${countMessages}';
        width: 18px;
        height: 18px;
        padding: 2px 0;
        border-radius: 50%;
        background-color: brown;
        color: #fff;
      }
    `};

  @media (max-width: 480px) {
    grid-column: 1/3;
    justify-content: center;
  }
`

const HeaderProfileMenu = styled.div`
  @media (max-width: 480px) {
    display: flex;
    justify-content: end;
    grid-column: 2/3;
    grid-row: 1;
  }
`
const HeaderDropDown = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: max-content;
  margin: 0 auto;
  font-size: 18px;

  button {
    font-size: 18px;
    position: relative;
  }

  a {
    display: flex;
    gap: 10px;
    position: relative;
  }

  button {
    padding: 0;
  }

  a:after,
  button:after {
    content: '';
    display: inline-block;
    position: absolute;
    bottom: -5px;
    left: 0;
    background-color: currentColor;
    height: 2px;
    width: 0;
    border-radius: 10px;
    transition: width 0.3s;
  }

  a:hover:after,
  button:hover:after {
    width: 100%;
  }
`

const WrapCountNotifications = styled.div`
  position: relative;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const CountNotifications = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 16px;
  height: 16px;
  background-color: brown;
  color: white;
  font-size: 10px;
  border-radius: 50%;
`

export const S = {
  Header,
  HeaderBtn,
  HeaderDropDown,
  HeaderLogo,
  HeaderNav,
  HeaderProfileMenu,
  HeaderWrap,
  WrapCountNotifications,
  CountNotifications,
}
