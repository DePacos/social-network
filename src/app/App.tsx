import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { REQUEST_STATUS } from '@/app/constants'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { selectAuthRequest } from '@/entities/selectors'
import { me } from '@/entities/slices/authSlice'
import { Header } from '@/widgets/header/ui'

const App = () => {
  const dispatch = useAppDispatch()
  const authRequest = useAppSelector(selectAuthRequest)

  useEffect(() => {
    dispatch(me())
  }, [])

  if (authRequest === REQUEST_STATUS.REJECTED) {
    return <Navigate to="/signin" />
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

export default App
