import styled, { css } from "styled-components"

const Button_Styles = styled.button<{ variant?: "primary" | "secondary" }>`
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.fontColor};
  background-color: transparent;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      padding: 10px 30px;
      border-radius: 10px;
      background-color: #17b1d7;

      &:hover {
        background-color: #0d97bb;
        transition: 0.3s;
      }
    `}
`

export const S = {
  Button: Button_Styles,
}
