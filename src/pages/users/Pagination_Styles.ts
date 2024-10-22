import styled from "styled-components"

const Ul = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: center;
  font-size: 16px;

  a {
    display: block;
    text-align: center;
    width: 45px;
    padding: 12px 4px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.fontPag};
    background-color: ${({ theme }) => theme.colors.bgPag};
    border-radius: 50%;
    &:hover {
      background-color: #17b1d7;
    }
  }
`
const Li = styled.li<props>`
  a {
    background-color: ${(props) => props.currentPage && "#17b1d7"};
  }
`

export const S = {
  Ul,
  Li,
}

type props = {
  currentPage: boolean
}
