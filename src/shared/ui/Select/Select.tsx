import { ChevronDown, ChevronUp } from 'lucide-react'
import { ComponentProps } from 'react'

import { useSelect } from './model'
import { S } from './Select.styles'

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
        type="button"
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
