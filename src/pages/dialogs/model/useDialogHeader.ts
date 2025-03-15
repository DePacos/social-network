import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { useMediaQuery } from '@/app/hooks/useMediaQuery'
import { useAppDispatch } from '@/app/hooks/useStateHook'
import {
  fetchMessages,
  filterDialogMessages,
  refreshDialogs,
} from '@/entities/reducers/dialogSlice'
import {
  createDialogFilterSchema,
  FilterDialogMessages,
} from '@/pages/dialogs/schemas/dialogFilter.schema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useDialogHeader = () => {
  const dispatch = useAppDispatch()
  const { id: paramId } = useParams()
  const [onFiltered, setOnFiltered] = useState(false)

  const isMobile = useMediaQuery('(max-width: 1024px)')

  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm<FilterDialogMessages>({
    mode: 'onChange',
    resolver: zodResolver(createDialogFilterSchema()),
  })

  const onSubmit = async (date: FilterDialogMessages) => {
    if (onFiltered) {
      const res = await dispatch(fetchMessages(Number(paramId)))

      if (res.meta.requestStatus === 'fulfilled') {
        setOnFiltered(false)
      }
    } else {
      const res = await dispatch(
        filterDialogMessages({
          date: date.date.toLocaleDateString(),
          userId: Number(paramId),
        }),
      )

      if (res.meta.requestStatus === 'fulfilled') {
        setOnFiltered(true)
      }
    }
  }

  const handleUpdateDialog = () => {
    dispatch(refreshDialogs(Number(paramId)))
  }

  return {
    control,
    handleSubmit,
    handleUpdateDialog,
    isMobile,
    onFiltered,
    onSubmit,
  }
}
