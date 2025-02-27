import { ChangeEvent, useRef } from 'react'

import { useAppDispatch } from '@/app/hooks/useStateHook'
import { setNotifications } from '@/entities/reducers/appSlice'

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
          type: 'appError',
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
