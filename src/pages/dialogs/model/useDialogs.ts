import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import type { DialogsResponse, UserDialog } from '@/app/types/app.types.ts'

import { useMediaQuery } from '@/app/hooks/useMediaQuery'
import { useAppDispatch, useAppSelector } from '@/app/hooks/useStateHook'
import { store } from '@/app/store'
import {
  fetchDialogs,
  selectDialogs,
  setUserDialog,
} from '@/entities/slices/dialogSlice.ts'
import {
  clearUsers,
  getUsers,
  selectUsers,
} from '@/entities/slices/usersSlice.ts'

export const useDialogs = () => {
  const dialogs = useAppSelector(selectDialogs)
  const users = useAppSelector(selectUsers)
  const dispatch = useAppDispatch()
  const { id: paramId } = useParams()
  const isMobile = useMediaQuery('(max-width: 768px)')

  const [viewDialog, setViewDialog] = useState(false)
  const [searchDialogs, setSearchDialogs] = useState<DialogsResponse[]>([])

  let usersDialogsIds: number[] = []

  if (searchDialogs.length > 0) {
    usersDialogsIds = searchDialogs.map(dialog => dialog.id)
  }

  const handleSearch = (value: string) => {
    const dialogs = selectDialogs(store.getState())

    if (value.length > 3) {
      const searchDialogs = dialogs.filter(dialog =>
        dialog.userName.includes(value),
      )

      setSearchDialogs(searchDialogs)

      dispatch(
        getUsers({
          cleanUsers: true,
          countUsersInPage: 20,
          pageNumber: 1,
          term: value,
        }),
      )
    } else {
      dispatch(clearUsers())
      setSearchDialogs([])
    }
  }

  const handleLink = (user: UserDialog) => {
    dispatch(setUserDialog(user))
  }

  useEffect(() => {
    dispatch(clearUsers())
    dispatch(fetchDialogs())

    return () => {
      dispatch(clearUsers())
    }
  }, [])

  return {
    dialogs,
    handleLink,
    handleSearch,
    isMobile,
    paramId,
    searchDialogs,
    setViewDialog,
    users: users.items.filter(user => !usersDialogsIds.includes(user.id)),
    viewDialog,
  }
}
