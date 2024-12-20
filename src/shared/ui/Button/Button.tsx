import React, { ButtonHTMLAttributes } from "react"
import { S } from "./button.styles"

type ButtonProps = {
  variant?: "primary" | "secondary"
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <S.Button variant={variant} {...props}>
      {children}
    </S.Button>
  )
}
