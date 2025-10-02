import { useToast } from '@/shared/ui/Toast/model'

import { S } from './Toast.styles.ts'

export const Toast = ({ notification }: { notification: string | null }) => {
  const { isView } = useToast(notification)

  return isView ? (
    <S.Wrapper>
      <S.Toast>{notification}</S.Toast>
    </S.Wrapper>
  ) : null
}
