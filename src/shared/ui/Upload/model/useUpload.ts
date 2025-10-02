import { type ChangeEvent, useRef } from 'react'

import { ERROR_TYPES } from '@/app/constants'
import { useAppDispatch } from '@/app/hooks'
import { setNotifications } from '@/entities/slices/appSlice.ts'

export const useUpload = (onChange: (file: File, fileUrl: string) => void) => {
  const dispatch = useAppDispatch()
  const uploadInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = () => {
    if (uploadInputRef.current) {
      uploadInputRef.current.click()
    }
  }

  const handleUploadInput = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]

    const allowedFormats = ['image/jpeg', 'image/png']
    const maxFileSize = 1024 * 1024

    if (
      !file ||
      !allowedFormats.includes(file.type) ||
      maxFileSize > file.size
    ) {
      dispatch(
        setNotifications({
          type: ERROR_TYPES.APP_ERROR,
          value: 'max file size 1Mb, format - jpeg/png',
        }),
      )

      if (uploadInputRef.current) {
        uploadInputRef.current.value = ''
      }

      return
    }

    const reader = new FileReader()

    reader.addEventListener('load', () => {
      const fileUrl = reader.result?.toString() || ''

      onChange(file as File, fileUrl)
    })
    reader.readAsDataURL(file as Blob)
  }

  return {
    handleFileSelect,
    handleUploadInput,
    uploadInputRef,
  }
}
