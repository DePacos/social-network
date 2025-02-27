import { ChangeEvent, ComponentProps, forwardRef, useId } from 'react'

import { S } from './datePicker.styles'

type Props = {
  id?: string
  label?: string
  error?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
} & ComponentProps<'input'>

export const DatePicker = forwardRef<HTMLInputElement, Props>(
  ({ error, id, label, onChange, ...props }, ref) => {
    const datePickerId = useId()

    return (
      <S.DatePicker>
        {label && <label htmlFor={id ? id : datePickerId}>{label}</label>}
        <input
          id={id ? id : datePickerId}
          ref={ref}
          type={'date'}
          onChange={onChange}
          {...props}
        />
        {error && <span>{error}</span>}
      </S.DatePicker>
    )
  },
)
