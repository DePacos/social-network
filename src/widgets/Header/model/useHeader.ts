import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/hooks/useStateHook'
import { selectAppIsLoading } from '@/entities/reducers/appSlice'
import {
  logout,
  selectAuthAvatar,
  selectAuthUserId,
} from '@/entities/reducers/authSlice'
import { disconnectWebsocket } from '@/entities/reducers/chatSlice'
import { getNewMessages } from '@/entities/reducers/dialogSlice'

export const useHeader = () => {
  const dispatch = useAppDispatch()

  const currentUserId = useAppSelector(selectAuthUserId)
  const userAvatar = useAppSelector(selectAuthAvatar)
  const isLoading = useAppSelector(selectAppIsLoading)

  useEffect(() => {
    dispatch(getNewMessages())
  }, [])

  const handlerLogout = () => {
    dispatch(logout())
    dispatch(disconnectWebsocket())
  }

  return {
    currentUserId,
    handlerLogout,
    isLoading,
    userAvatar,
  }
}
