import { CircleUserRound, LogOut, UserRoundPen } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

import { SkeletonStyled } from '@/app/styles/global.styles'
import { Button } from '@/shared/ui/Button/Button'
import { DropDown } from '@/shared/ui/DropDown/DropDown'
import { S } from '@/widgets/Header/ui/header.styles'

type Props = {
  isLoading: boolean
  userAvatar: string
  currentUserId: number
  handlerLogout: () => void
}

export const HeaderProfileMenu = ({
  currentUserId,
  handlerLogout,
  isLoading,
  userAvatar,
}: Props) => {
  return (
    <S.HeaderProfileMenu>
      {isLoading ? (
        <SkeletonStyled />
      ) : (
        <DropDown
          type={'icon'}
          childrenBtn={
            userAvatar ? (
              <img src={userAvatar} alt={'avatar'} />
            ) : (
              <CircleUserRound size={50} strokeWidth={1} />
            )
          }
        >
          <S.HeaderDropDown>
            <Link to={`/profile/${currentUserId}`}>
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
      )}
    </S.HeaderProfileMenu>
  )
}
