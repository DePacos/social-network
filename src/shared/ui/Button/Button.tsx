import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from 'react'

import { S } from './index'

type Props = {
  buttonStyles?: { [key: string]: string | number }
  variant?: 'primary' | 'secondary' | 'icon'
  startIcon?: ReactNode
  endIcon?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ buttonStyles, children, endIcon, startIcon, variant, ...props }, ref) => {
    return (
      <S.Button
        ref={ref}
        buttonStyles={buttonStyles}
        variant={variant}
        {...props}
      >
        {startIcon}
        <span>{children}</span>
        {endIcon}
      </S.Button>
    )
  },
)
