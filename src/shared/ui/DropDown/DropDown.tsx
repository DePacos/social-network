import { ReactNode } from 'react'

import { Button } from '@/shared/ui/Button/Button'
import { useDropDown } from '@/shared/ui/DropDown/model/useDropDown'

import { S } from './dropDown.styles'

type Props = {
  type?: 'primary' | 'secondary' | 'icon'
  childrenBtn: ReactNode | string
  children: ReactNode | string
}

export const DropDown = ({
  children,
  childrenBtn,
  type = 'primary',
}: Props) => {
  const { dropDownBtnRef, handlerOpen, isOpen } = useDropDown()

  return (
    <S.DropDownWrap>
      <Button ref={dropDownBtnRef} variant={type} onClick={handlerOpen}>
        {childrenBtn}
      </Button>
      {isOpen && <S.DropDownContent>{children}</S.DropDownContent>}
    </S.DropDownWrap>
  )
}
