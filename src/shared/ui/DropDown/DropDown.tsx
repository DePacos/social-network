import { ReactNode, useEffect, useRef, useState } from 'react'

import { Button } from '@/shared/ui/Button/Button'

import { S } from './dropDown.styles'

type Props = {
  type?: 'primary' | 'secondary' | 'icon'
  trigger: ReactNode | string
  children: ReactNode | string
}

export const DropDown = ({ children, trigger, type = 'primary' }: Props) => {
  const [open, setOpen] = useState(false)
  const dropDownBtnRef = useRef<HTMLButtonElement>(null)

  const handlerOpen = () => {
    setOpen(prev => !prev)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropDownBtnRef.current) {
      if (!dropDownBtnRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [open])

  return (
    <S.DropDownWrap>
      <Button ref={dropDownBtnRef} variant={type} onClick={handlerOpen}>
        {trigger}
      </Button>
      {open && <S.DropDownContent>{children}</S.DropDownContent>}
    </S.DropDownWrap>
  )
}
