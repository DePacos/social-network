import React, { ButtonHTMLAttributes, ReactNode } from 'react'

import { S } from './button.styles'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'icon'
  startIcon?: ReactNode
  endIcon?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  children,
  endIcon,
  startIcon,
  variant,
  ...props
}: ButtonProps) => {
  return (
    <S.Button variant={variant} {...props}>
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </S.Button>
  )
}
