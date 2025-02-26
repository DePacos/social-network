import { Bell, Lightbulb } from 'lucide-react'
import React from 'react'

import { Button } from '@/shared/ui/Button/Button'
import { S } from '@/widgets/Header/ui/header.styles'

type Props = {
  changeTheme: () => void
  newMessages: number
}

export const HeaderBtn = ({ changeTheme, newMessages }: Props) => {
  return (
    <S.HeaderBtn countMessages={newMessages}>
      <Button onClick={() => changeTheme()} variant={'icon'}>
        <Lightbulb />
      </Button>
      <Button variant={'icon'}>
        <Bell />
      </Button>
    </S.HeaderBtn>
  )
}
