import { useEffect } from 'react'

import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { disconnectWebsocket, getNewMessages } from '@/entities/actions'
import { selectAuthAvatar, selectAuthUserId } from '@/entities/selectors'
import { logout } from '@/entities/slices/authSlice.ts'

export const useHeader = () => {
  const dispatch = useAppDispatch()

  const currentUserId = useAppSelector(selectAuthUserId)
  const userAvatar = useAppSelector(selectAuthAvatar)

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
    userAvatar,
  }
}
