import React from 'react'

import { useToast } from '@/shared/ui/Toast/model/useToast'

import { S } from './toast.styles'

export const Toast = ({ notification }: { notification: string | null }) => {
  const { isView } = useToast(notification)

  return isView ? (
    <S.Wrapper>
      <S.Toast>{notification}</S.Toast>
    </S.Wrapper>
  ) : null
}
