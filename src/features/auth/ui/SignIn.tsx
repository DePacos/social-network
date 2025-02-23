import { Loader, Mail } from 'lucide-react'
import React from 'react'
import { Navigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/app/hooks/stateHook'
import {
  selectAppIsLoading,
  selectAppNotifications,
} from '@/entities/reducers/appSlice'
import {
  selectAuthCaptcha,
  selectAuthIsLoggedIn,
} from '@/entities/reducers/authSlice'
import { useSignIn } from '@/features/auth/model/useSignIn'
import logo from '@/shared/assets/images/logo.webp'
import { Button } from '@/shared/ui/Button/Button'
import { FormCheckbox } from '@/shared/ui/Checkbox/FormCheckbox'
import { FormInput } from '@/shared/ui/Input/FormInput'
import { Toast } from '@/shared/ui/Toast/Toast'

import { S } from './signIn.styles'

export const SignIn = () => {
  const isLoading = useAppSelector(selectAppIsLoading)
  const notifications = useAppSelector(selectAppNotifications)
  const captcha = useAppSelector(selectAuthCaptcha)
  const isLoggedIn = useAppSelector(selectAuthIsLoggedIn)
  const dispatch = useAppDispatch()

  const { control, handleSubmit, isValid, onSubmit } = useSignIn(dispatch)

  if (isLoggedIn && !isLoading) {
    return <Navigate to={'/'} />
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo>
          <img src={logo} alt={'logo'} />
          <span>SocialNetwork</span>
        </S.Logo>
        <S.Form
          error={notifications.type === 'appError' ? notifications.value : null}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormInput
            control={control}
            iconEnd={<Mail color={'black'} size={20} />}
            placeholder={'Email*'}
            name={'email'}
            type={'email'}
          />
          <FormInput
            control={control}
            placeholder={'Password*'}
            name={'password'}
            type={'password'}
          />
          <S.WrapCheckbox>
            <FormCheckbox
              control={control}
              id={'remember'}
              name={'rememberMe'}
              label={'Remember me'}
            />
          </S.WrapCheckbox>
          {captcha && (
            <>
              <img src={captcha} alt={'captcha'} />
              <FormInput
                control={control}
                placeholder={'enter captcha'}
                name={'captcha'}
              />
            </>
          )}
          <Button
            style={{ height: '46px' }}
            endIcon={
              isLoading ? (
                <div className={'loader'}>
                  <Loader size={18} />
                </div>
              ) : null
            }
            variant={'primary'}
            type={'submit'}
            disabled={!isValid}
          >
            {isLoading ? 'Loading... ' : 'Log into your account'}
          </Button>
        </S.Form>
      </S.Wrapper>
      {notifications.type === 'catchError' && (
        <Toast notification={notifications.value} />
      )}
    </S.Container>
  )
}
