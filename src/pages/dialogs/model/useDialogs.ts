import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { useMediaQuery } from '@/app/hooks/useMediaQuery'
import { useAppDispatch } from '@/app/hooks/useStateHook'
import { User } from '@/app/types/types'
import { fetchDialogs, setUserDialog } from '@/entities/reducers/dialogSlice'
import { clearSearchUsers, getUsers } from '@/entities/reducers/usersSlice'

export const useDialogs = () => {
  const [viewDialog, setViewDialog] = useState(false)
  const dispatch = useAppDispatch()

  const { id: paramId } = useParams()

  const isMobile = useMediaQuery('(max-width: 768px)')

  const handleSearch = (value: string) => {
    if (value.length > 3) {
      dispatch(getUsers({ countUsersInPage: 20, pageNumber: 1, term: value }))
    } else {
      dispatch(clearSearchUsers())
    }
  }

  const handleLink = (user: User) => {
    dispatch(setUserDialog(user))
  }

  useEffect(() => {
    dispatch(fetchDialogs())
  }, [])

  return {
    handleLink,
    handleSearch,
    isMobile,
    paramId,
    setViewDialog,
    viewDialog,
  }
}
