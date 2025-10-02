import { type ReactNode } from 'react'

import { Button } from '@/shared/ui/Button'
import { useUpload } from '@/shared/ui/Upload/model'

import { S } from './Upload.styles.ts'

type Props = {
  onChange: (file: File, fileUrl: string) => void
  variant: 'icon' | 'primary' | 'secondary'
  children: ReactNode | string
}

export const Upload = ({ children, onChange, variant }: Props) => {
  const { handleFileSelect, handleUploadInput, uploadInputRef } =
    useUpload(onChange)

  return (
    <S.UploadWrap>
      <Button onClick={handleFileSelect} variant={variant}>
        {children}
      </Button>
      <input
        accept="image/png, image/jpeg"
        onChange={handleUploadInput}
        ref={uploadInputRef}
        type="file"
      />
    </S.UploadWrap>
  )
}
