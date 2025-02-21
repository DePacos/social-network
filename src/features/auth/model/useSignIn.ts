import { useForm } from 'react-hook-form'

import { AppRootState } from '@/app/types/types'
import { signIn } from '@/entities/reducers/authSlice'
import {
  createSignInSchema,
  SignInFormData,
} from '@/features/auth/schemas/sigIn.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { UnknownAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'

export const useSignIn = (
  dispatch: ThunkDispatch<AppRootState, undefined, UnknownAction>,
) => {
  const {
    control,
    formState: { isValid },
    handleSubmit,
  } = useForm<SignInFormData>({
    defaultValues: {
      captcha: '',
      email: '',
      password: '',
      rememberMe: false,
    },
    mode: 'onChange',
    resolver: zodResolver(createSignInSchema()),
  })

  const onSubmit = (data: SignInFormData) => {
    dispatch(signIn(data))
  }

  return {
    control,
    handleSubmit,
    isValid,
    onSubmit,
  }
}
