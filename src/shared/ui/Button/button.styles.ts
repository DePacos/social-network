import styled, { css } from "styled-components"

const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.fontColor};
  background-color: transparent;

  span {
    display: inline-block;
    margin: 0 10px;
  }

  ${({ variant }) =>
    variant === "primary" &&
    css`
      padding: 15px 20px;
      border-radius: 10px;
      background-color: #cb5b0f;
      transition: 0.3s;

      &:hover {
        box-shadow: 0 0 1px 1px;
      }

      &:active {
        box-shadow: 0 0 1px 2px;
      }
    `}
`

export const S = {
  Button,
}
