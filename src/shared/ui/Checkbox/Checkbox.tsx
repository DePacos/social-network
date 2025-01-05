import { ComponentProps, forwardRef, ReactNode } from 'react'

import { S } from './checkbox.styles'

type Props = {
  error?: string
  label?: ReactNode
} & ComponentProps<'input'>

export const CheckBox = forwardRef<HTMLInputElement, Props>(
  ({ disabled, error, id, label, ...props }, ref) => {
    return (
      <S.CheckboxWrap disabled={disabled}>
        <input
          type={'checkbox'}
          ref={ref}
          id={id}
          disabled={disabled}
          {...props}
        />
        {label && <label htmlFor={id}>{label}</label>}
        {error && <span className={'error'}>{error}</span>}
      </S.CheckboxWrap>
    )
  },
)
