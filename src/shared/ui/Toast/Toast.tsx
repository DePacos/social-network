import React, { useEffect } from 'react'

import { useAppDispatch } from '@/app/hooks/appHooks'
import { setNotifications } from '@/entities/reducers/appSlice'

import { S } from './toast.styles'

export const Toast = ({ notification }: { notification: string | null }) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setNotifications({ type: null, value: null }))
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [notification])

  return (
    <S.Wrapper>
      <S.Toast>{notification}</S.Toast>
    </S.Wrapper>
  )
}
