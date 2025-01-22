import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { ComponentProps, MouseEvent, useState } from 'react'

import { S } from './select.styles'

type Props = {
  options: { value: string; label: string }[]
  value?: string
  error?: string
  onChange?: (value: string) => void
} & ComponentProps<'button'>

export const Select = ({
  error,
  onChange,
  options,
  value,
  ...props
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const handlerTrigger = () => {
    setIsOpen(prevState => !prevState)
  }

  const handlerOption = (e: MouseEvent<HTMLDivElement>) => {
    setIsOpen(false)
    const target = e.target as HTMLOptionElement

    onChange?.(target.value)
  }

  return (
    <S.SelectWrap>
      <S.SelectButton
        error={!!error}
        type={'button'}
        onClick={handlerTrigger}
        {...props}
      >
        {value || 'Select value'}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </S.SelectButton>
      {isOpen && (
        <S.OptionWrap onClick={handlerOption}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </S.OptionWrap>
      )}
      {error && <span>{error}</span>}
    </S.SelectWrap>
  )
}
