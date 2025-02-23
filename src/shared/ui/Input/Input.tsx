import { Eye, EyeOff, Search } from 'lucide-react'
import React, { ComponentProps, forwardRef, ReactNode } from 'react'

import { InputTypes } from '@/app/types/types'
import { useInput } from '@/shared/ui/Input/model/useInput'

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
    const { handleChangeType, inputId, inputType } = useInput(type)
    const getIconAfter = () => {
      if (type === 'password') {
        return inputType === 'password' ? (
          <EyeOff
            style={{ cursor: 'pointer' }}
            color={'black'}
            onClick={handleChangeType}
          />
        ) : (
          <Eye
            style={{ cursor: 'pointer' }}
            color={'black'}
            onClick={handleChangeType}
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
        {!!error && <span className={'error'}>{error}</span>}
      </S.LabelWrap>
    )
  },
)

Input.displayName = 'Input'
