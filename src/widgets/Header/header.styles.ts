import styled from 'styled-components'

const Header = styled.header`
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

const HeaderBtn = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 480px) {
    grid-column: 1/3;
    justify-content: center;
  }
`

const HeaderProfile = styled.div`
  @media (max-width: 480px) {
    justify-items: end;
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

export const S = {
  Header,
  HeaderBtn,
  HeaderDropDown,
  HeaderLogo,
  HeaderNav,
  HeaderProfile,
  HeaderWrap,
}
