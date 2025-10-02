import { Bell, Lightbulb } from 'lucide-react'
import { useContext } from 'react'

import { useAppSelector } from '@/app/hooks'
import { ThemeContext } from '@/app/providers/theme/ThemeContext'
import { selectDialogsNewMessages } from '@/entities/slices/dialogSlice.ts'
import { Button } from '@/shared/ui/Button'

import { S } from './Header.styles.ts'

export const HeaderBtn = () => {
  const { changeTheme } = useContext(ThemeContext)
  const newMessages = useAppSelector(selectDialogsNewMessages)

  return (
    <S.HeaderBtn countMessages={newMessages}>
      <Button onClick={() => changeTheme()} variant="icon">
        <Lightbulb />
      </Button>
      <Button variant="icon">
        <Bell />
      </Button>
    </S.HeaderBtn>
  )
}
