import styled, { css } from 'styled-components'

const Button = styled.button.withConfig({
  shouldForwardProp: prop => prop !== 'variant' && prop !== 'buttonStyles',
})<{
  variant?: 'primary' | 'secondary' | 'icon'
  buttonStyles?: { [key: string]: string | number }
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.fontPrimary};
  background-color: transparent;
  transition: transform 0.3s;
  padding: 15px 20px;
  border-radius: 10px;

  span {
    display: inline-block;
    margin: 0 10px;
  }

  ${({ disabled, variant }) => css`
    ${['primary', 'secondary'].includes(variant || '') &&
    css`
      &:hover {
        box-shadow: 0 0 1px 1px;
      }

      &:active {
        box-shadow: 0 0 1px 2px;
      }
    `}
    ${variant === 'primary' &&
    css`
      background-color: #cb5b0f;
    `}
    ${variant === 'secondary' &&
    css`
      background-color: #0b566c;
    `}
    ${variant === 'icon' &&
    css`
      padding: 0;
      span {
        margin: 0;
      }
      &:hover {
        transform: scale(1.1);
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

  ${({ buttonStyles }) => css`
    ${{ ...buttonStyles }}
  `}
`

export const S = {
  Button,
}
