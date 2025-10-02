import { type ComponentProps, forwardRef, useId } from 'react'

import { S } from './index'

type Props = {
  error?: string
  label: string | undefined
} & ComponentProps<'input'>

export const CheckBox = forwardRef<HTMLInputElement, Props>(
  ({ disabled, error, id, label, ...props }, ref) => {
    const checkBoxId = useId()

    return (
      <S.CheckboxWrap disabled={disabled}>
        <input
          type="checkbox"
          ref={ref}
          id={id || checkBoxId}
          disabled={disabled}
          {...props}
        />
        {label && <label htmlFor={id || checkBoxId}>{label}</label>}
        {error && <span className="error">{error}</span>}
      </S.CheckboxWrap>
    )
  },
)
