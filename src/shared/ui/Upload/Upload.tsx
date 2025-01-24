import React, { ChangeEvent, ReactNode, useRef } from 'react'

import { useAppDispatch } from '@/app/hooks/stateHook'
import { setNotifications } from '@/entities/reducers/appSlice'
import { Button } from '@/shared/ui/Button/Button'

import { S } from './upload.styles'

export const Upload = ({
  children,
  onChange,
  variant,
}: {
  onChange: (file: File, fileUrl: string) => void
  variant: 'icon' | 'primary' | 'secondary'
  children: ReactNode | string
}) => {
  const dispatch = useAppDispatch()
  const uploadInputRef = useRef<HTMLInputElement>(null)

  const handlerFileSelect = () => {
    if (uploadInputRef.current) {
      uploadInputRef.current.click()
    }
  }

  const handlerUploadInput = (e: ChangeEvent<HTMLInputElement>) => {
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

  return (
    <S.UploadWrap>
      <Button onClick={handlerFileSelect} variant={variant}>
        {children}
      </Button>
      <input
        accept={'image/png, image/jpeg'}
        onChange={handlerUploadInput}
        ref={uploadInputRef}
        type={'file'}
      />
    </S.UploadWrap>
  )
}
