import { Bell, Lightbulb } from 'lucide-react'
import React, { useContext } from 'react'

import { useAppSelector } from '@/app/hooks/useStateHook'
import { ThemeContext } from '@/app/providers/ThemeContext'
import { selectDialogsNewMessages } from '@/entities/reducers/dialogSlice'
import { Button } from '@/shared/ui/Button/Button'
import { S } from '@/widgets/Header/ui/header.styles'

export const HeaderBtn = () => {
  const { changeTheme } = useContext(ThemeContext)
  const newMessages = useAppSelector(selectDialogsNewMessages)

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
