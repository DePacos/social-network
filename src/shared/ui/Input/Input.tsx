import { Eye, EyeOff, Search } from 'lucide-react'
import React, {
  ComponentProps,
  forwardRef,
  ReactNode,
  useCallback,
  useState,
} from 'react'

import { InputTypes } from '@/app/types/types'

import { S } from './input.styles'

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
    const [inputType, setInputType] = useState(type)

    const handlerChangeType = useCallback(() => {
      setInputType(prev => (prev === 'password' ? 'text' : 'password'))
    }, [])

    const getIconAfter = () => {
      if (type === 'password') {
        return inputType === 'password' ? (
          <EyeOff
            style={{ cursor: 'pointer' }}
            color={'black'}
            onClick={handlerChangeType}
          />
        ) : (
          <Eye
            style={{ cursor: 'pointer' }}
            color={'black'}
            onClick={handlerChangeType}
          />
        )
      }

      return iconEnd
    }

    const getIconBefore = () => {
      return type === 'search' ? (
        <Search size={20} color={'black'} />
      ) : (
        iconStart
      )
    }

    return (
      <S.LabelWrap label={label}>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <S.InputWrap
          iconStart={getIconBefore()}
          iconEnd={getIconAfter()}
          iconPadding={iconPadding}
          error={!!error}
        >
          {getIconBefore()}
          <input
            ref={ref}
            id={label ? id : undefined}
            type={inputType}
            {...props}
          />
          {getIconAfter()}
        </S.InputWrap>
        {!!error && <span className={'error'}>{error}</span>}
      </S.LabelWrap>
    )
  },
)

Input.displayName = 'Input'
