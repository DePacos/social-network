import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { type UnknownAction } from 'redux'
import { type ThunkDispatch } from 'redux-thunk'

import { type AppRootState } from '@/app/types'
import { signIn } from '@/entities/slices/authSlice.ts'
import {
  createSignInSchema,
  type SignInFormData,
} from '@/features/auth/schemas/sigIn.schema'

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
