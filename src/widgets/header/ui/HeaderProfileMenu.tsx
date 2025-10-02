import { CircleUserRound, LogOut, UserRoundPen } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ROUTES } from '@/app/constants'
import { Button } from '@/shared/ui/Button'
import { DropDown } from '@/shared/ui/DropDown'

import { useHeader } from '../model/useHeader'
import { S } from './Header.styles.ts'

export const HeaderProfileMenu = () => {
  const { currentUserId, handlerLogout, userAvatar } = useHeader()

  return (
    <S.HeaderProfileMenu>
      <DropDown
        type="icon"
        childrenBtn={
          userAvatar ? (
            <img src={userAvatar} alt="avatar" />
          ) : (
            <CircleUserRound size={50} strokeWidth={1} />
          )
        }
      >
        <S.HeaderDropDown>
          <Link to={ROUTES.PROFILE + '/' + currentUserId}>
            <UserRoundPen strokeWidth={1} />
            Profile
          </Link>
          <Button
            onClick={handlerLogout}
            startIcon={<LogOut strokeWidth={1} />}
          >
            Logout
          </Button>
        </S.HeaderDropDown>
      </DropDown>
    </S.HeaderProfileMenu>
  )
}
