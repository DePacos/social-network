import { ComponentProps, forwardRef } from 'react'

import { S } from './textArea.styles'

export type Props = {
  error?: string
  label?: string
  id?: string
  textAreaStyles?: { [key: string]: string | number }
  wrapStyles?: { [key: string]: string | number }
} & ComponentProps<'textarea'>

export const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ className, error, id, label, ...props }, ref) => {
    const elementId = id ?? undefined

    return (
      <S.TextAreaWrap className={className}>
        {label && <label htmlFor={elementId}>{label}</label>}
        <S.TextArea id={elementId} ref={ref} error={!!error} {...props} />
        {error && <span>{error}</span>}
      </S.TextAreaWrap>
    )
  },
)
