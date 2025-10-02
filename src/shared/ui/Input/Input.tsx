import { Eye, EyeOff, Search } from 'lucide-react'
import {
  type ComponentProps,
  forwardRef,
  type ReactNode,
  useId,
  useState,
} from 'react'

import { type InputTypes } from '@/app/types'

import { S } from './Input.styles.ts'

type Props = {
  type?: InputTypes
  error?: string
  label?: string
  iconPadding?: string
  iconStart?: ReactNode
  iconEnd?: ReactNode
} & ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      error,
      iconEnd,
      iconPadding = '45',
      iconStart,
      id,
      label,
      type = 'text',
      ...props
    },
    ref,
  ) => {
    const [inputType, setInputType] = useState<InputTypes>(type)
    const inputId = useId()

    const handleChangeType = () => {
      setInputType(prev => (prev === 'text' ? 'password' : 'text'))
    }

    const getIconAfter = () => {
      if (type === 'password') {
        return inputType === 'password' ? (
          <EyeOff
            style={{ cursor: 'pointer' }}
            color="black"
            onClick={handleChangeType}
          />
        ) : (
          <Eye
            style={{ cursor: 'pointer' }}
            color="black"
            onClick={handleChangeType}
          />
        )
      }

      return iconEnd
    }

    const getIconBefore = () => {
      return type === 'search' ? <Search size={20} color="black" /> : iconStart
    }

    return (
      <S.LabelWrap label={label}>
        {label ? <label htmlFor={id || inputId}>{label}</label> : null}
        <S.InputWrap
          iconStart={getIconBefore()}
          iconEnd={getIconAfter()}
          iconPadding={iconPadding}
          error={!!error}
        >
          {getIconBefore()}
          <input type={inputType} ref={ref} id={id || inputId} {...props} />
          {getIconAfter()}
        </S.InputWrap>
        {!!error && <span className="error">{error}</span>}
      </S.LabelWrap>
    )
  },
)

Input.displayName = 'Input'
