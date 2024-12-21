import { Eye, EyeOff, Search } from 'lucide-react'
import React, {
  ComponentProps,
  forwardRef,
  ReactNode,
  useEffect,
  useState,
} from 'react'

import { InputTypes } from '@/app/types/types'

import { S } from './input.styles'

type Props = {
  type?: InputTypes
  error?: string | undefined
  label?: string | undefined
  iconPadding?: string | undefined
  iconStart?: ReactNode | undefined
  iconEnd?: ReactNode | undefined
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
    const [iconBefore, setIconBefore] = useState(iconStart)
    const [iconAfter, setIconAfter] = useState(iconEnd)

    useEffect(() => {
      if (inputType === 'password') {
        setIconAfter(
          <Eye
            style={{ cursor: 'pointer' }}
            color={'black'}
            onClick={handlerChangeType}
          />,
        )
      }
      if (inputType === 'search') {
        setIconBefore(<Search size={20} color={'black'} />)
      }
    }, [])

    const handlerChangeType = () => {
      setInputType(prevInputType => {
        const newType = prevInputType === 'password' ? 'text' : 'password'

        setIconAfter(
          newType === 'password' ? (
            <Eye
              style={{ cursor: 'pointer' }}
              color={'black'}
              onClick={handlerChangeType}
            />
          ) : (
            <EyeOff
              style={{ cursor: 'pointer' }}
              color={'black'}
              onClick={handlerChangeType}
            />
          ),
        )

        return newType
      })
    }

    return (
      <S.LabelWrap label={label}>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <S.InputWrap
          iconStart={iconBefore}
          iconEnd={iconAfter}
          iconPadding={iconPadding}
          error={!!error}
        >
          {iconBefore}
          <input ref={ref} id={label ? id : ''} type={inputType} {...props} />
          {iconAfter}
        </S.InputWrap>
        {!!error && <span className={'error'}>{error}</span>}
      </S.LabelWrap>
    )
  },
)

Input.displayName = 'Input'
