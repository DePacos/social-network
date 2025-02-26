import { useContext, useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/hooks/useStateHook'
import { ThemeContext } from '@/app/providers/ThemeContext'
import { selectAppIsLoading } from '@/entities/reducers/appSlice'
import { logout, selectAuthUserId } from '@/entities/reducers/authSlice'
import {
  getNewMessages,
  selectNewMessages,
} from '@/entities/reducers/dialogSlice'
import { getUserProfile, selectProfile } from '@/entities/reducers/profileSlice'

export const useHeader = () => {
  const { changeTheme } = useContext(ThemeContext)
  const currentUserId = useAppSelector(selectAuthUserId)
  const userAvatar = useAppSelector(selectProfile).photos.small
  const isLoading = useAppSelector(selectAppIsLoading)
  const newMessages = useAppSelector(selectNewMessages)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (currentUserId !== 0) {
      dispatch(getUserProfile(currentUserId))
      dispatch(getNewMessages())
    }
  }, [currentUserId, dispatch])

  const handlerLogout = () => {
    dispatch(logout())
  }

  return {
    changeTheme,
    currentUserId,
    handlerLogout,
    isLoading,
    newMessages,
    userAvatar,
  }
}
