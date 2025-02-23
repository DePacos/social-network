import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { ComponentProps } from 'react'

import { useSelect } from '@/shared/ui/Select/model/useSelect'

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
  const { handleOption, handleTrigger, isOpen } = useSelect(onChange)

  return (
    <S.SelectWrap>
      <S.SelectButton
        error={!!error}
        type={'button'}
        onClick={handleTrigger}
        {...props}
      >
        {value || 'Select value'}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </S.SelectButton>
      {isOpen && (
        <S.OptionWrap onClick={handleOption}>
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
