import {
  Bell,
  CircleUserRound,
  Lightbulb,
  LogOut,
  UserRoundPen,
} from 'lucide-react'
import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/app/hooks/stateHook'
import { ThemeContext } from '@/app/providers/ThemeContext'
import { SkeletonStyled } from '@/app/styles/global.styles'
import { selectAppIsLoading } from '@/entities/reducers/appSlice'
import { logout, selectAuthUserId } from '@/entities/reducers/authSlice'
import { getUserProfile, selectProfile } from '@/entities/reducers/profileSlice'
import logo from '@/shared/assets/images/logo.webp'
import { Button } from '@/shared/ui/Button/Button'
import { DropDown } from '@/shared/ui/DropDown/DropDown'
import { S } from '@/widgets/Header/header.styles'

export const Header = () => {
  const { changeTheme } = useContext(ThemeContext)
  const currentUserId = useAppSelector(selectAuthUserId)
  const userAvatar = useAppSelector(selectProfile).photos.small
  const isLoading = useAppSelector(selectAppIsLoading)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (currentUserId !== 0) {
      dispatch(getUserProfile(currentUserId))
    }
  }, [currentUserId, dispatch])

  const handlerLogout = () => {
    dispatch(logout())
  }

  return (
    <S.Header>
      <S.HeaderWrap>
        <S.HeaderLogo>
          <Link to={'/'}>
            <img src={logo} alt={'logo'} />
            <span>SocialNetwork</span>
          </Link>
        </S.HeaderLogo>
        <S.HeaderNav>
          <ul>
            <li>
              <Link to={'/members'}>Home</Link>
            </li>
            <li>
              <Link to={'/dialogs'}>Dialogs</Link>
            </li>
            <li>
              <Link to={'/chat'}>Chat</Link>
            </li>
          </ul>
        </S.HeaderNav>
        <S.HeaderBtn>
          <Button onClick={() => changeTheme()} variant={'icon'}>
            <Lightbulb />
          </Button>
          <Button variant={'icon'}>
            <Bell />
          </Button>
        </S.HeaderBtn>
        <S.HeaderProfile>
          {isLoading ? (
            <SkeletonStyled />
          ) : (
            <DropDown
              type={'icon'}
              trigger={
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
        </S.HeaderProfile>
      </S.HeaderWrap>
    </S.Header>
  )
}
