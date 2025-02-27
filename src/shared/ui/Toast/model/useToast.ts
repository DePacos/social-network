import { useEffect, useState } from 'react'

import { useAppDispatch } from '@/app/hooks/useStateHook'
import { setNotifications } from '@/entities/reducers/appSlice'

export const useToast = (notification: string | null) => {
  const dispatch = useAppDispatch()

  const [isView, setIsView] = useState(false)

  useEffect(() => {
    if (notification) {
      setIsView(true)
    }
    const timer = setTimeout(() => {
      dispatch(setNotifications({ type: null, value: null }))
      setIsView(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [notification])

  return {
    isView,
  }
}
