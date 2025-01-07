import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/app/hooks/stateHook'
import { SkeletonStyled } from '@/app/styles/global.styles'
import { selectAppIsInitialized } from '@/entities/reducers/appSlice'
import { me, selectAuthIsLoggedIn } from '@/entities/reducers/authSlice'
import { Header } from '@/widgets/Header/Header'

export const App = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(selectAuthIsLoggedIn)
  const isInitialized = useAppSelector(selectAppIsInitialized)

  useEffect(() => {
    dispatch(me())
  }, [])

  if (!isInitialized) {
    return <SkeletonStyled />
  }

  if (!isLoggedIn) {
    return <Navigate to={'/signin'} />
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  )
}
