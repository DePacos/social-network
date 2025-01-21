import React, { useEffect, useState } from 'react'

import { useAppDispatch } from '@/app/hooks/stateHook'
import { setNotifications } from '@/entities/reducers/appSlice'

import { S } from './toast.styles'

export const Toast = ({ notification }: { notification: string | null }) => {
  const dispatch = useAppDispatch()

  const [view, setView] = useState(false)

  useEffect(() => {
    if (notification) {
      setView(true)
    }
    const timer = setTimeout(() => {
      dispatch(setNotifications({ type: null, value: null }))
      setView(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [notification])

  return view ? (
    <S.Wrapper>
      <S.Toast>{notification}</S.Toast>
    </S.Wrapper>
  ) : null
}
