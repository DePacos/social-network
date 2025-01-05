import styled, { css } from 'styled-components'

const Button = styled.button<{ variant?: 'primary' | 'secondary' | 'icon' }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.fontPrimary};
  background-color: transparent;
  transition: transform 0.3s;

  span {
    display: inline-block;
    margin: 0 10px;
  }

  ${({ disabled, variant }) => css`
    ${variant === 'primary' &&
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
    ${variant === 'icon' &&
    css`
      span {
        margin: 0;
      }
      &:hover {
        transform: scale(1.05);
      }
    `}
    ${disabled &&
    css`
      opacity: 0.7;
      cursor: default;
      &:hover {
        box-shadow: none;
      }

      &:active {
        box-shadow: none;
      }
    `}
  `}
`

export const S = {
  Button,
}
