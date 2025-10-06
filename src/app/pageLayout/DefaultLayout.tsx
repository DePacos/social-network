import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { REQUEST_STATUS, ROUTES } from '@/app/constants'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { selectAuthRequest } from '@/entities/selectors'
import { me } from '@/entities/slices/authSlice'
import { Header } from '@/widgets/header/ui'

const DefaultLayout = () => {
  const dispatch = useAppDispatch()
  const authRequest = useAppSelector(selectAuthRequest)

  useEffect(() => {
    dispatch(me())
  }, [])

  if (authRequest === REQUEST_STATUS.PENDING) return null

  if (authRequest === REQUEST_STATUS.REJECTED)
    return <Navigate to={ROUTES.SIGN_IN} />

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default DefaultLayout
