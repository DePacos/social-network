import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import { S } from './button.styles'

type Props = {
  buttonStyles?: { [key: string]: string | number }
  variant?: 'primary' | 'secondary' | 'icon'
  startIcon?: ReactNode
  endIcon?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  buttonStyles,
  children,
  endIcon,
  startIcon,
  variant,
  ...props
}: Props) => {
  return (
    <S.Button buttonStyles={buttonStyles} variant={variant} {...props}>
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </S.Button>
  )
}
