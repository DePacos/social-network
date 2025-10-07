import { Loader, Mail } from 'lucide-react'
import { Navigate } from 'react-router-dom'

import { REQUEST_STATUS, ROUTES } from '@/app/constants'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import {
  selectAppIsLoading,
  selectAppNotifications,
  selectAuthCaptcha,
  selectAuthRequest,
} from '@/entities/selectors'
import logo from '@/shared/assets/images/logo.webp'
import { Button, FormCheckbox, FormInput, Toast } from '@/shared/ui'

import { useSignIn } from '../model/useSignIn'
import { S } from './SignIn.styles.ts'

const SignIn = () => {
  const isLoading = useAppSelector(selectAppIsLoading)
  const notifications = useAppSelector(selectAppNotifications)
  const captcha = useAppSelector(selectAuthCaptcha)
  const authRequest = useAppSelector(selectAuthRequest)
  const dispatch = useAppDispatch()

  const { control, handleSubmit, isValid, onSubmit } = useSignIn(dispatch)

  const error =
    notifications.type === 'appError' &&
    notifications.value !== 'You are not authorized'
      ? notifications.value
      : null

  if (authRequest === REQUEST_STATUS.FULFILLED) {
    return <Navigate to={ROUTES.USERS} />
  }

  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo>
          <img src={logo} alt="logo" />
          <span>SocialNetwork</span>
        </S.Logo>
        <S.Form error={error} onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            control={control}
            iconEnd={<Mail color="black" size={20} />}
            placeholder="Email*"
            name="email"
            type="email"
          />
          <FormInput
            control={control}
            placeholder="Password*"
            name="password"
            type="password"
          />
          <S.WrapCheckbox>
            <FormCheckbox
              control={control}
              id="remember"
              name="rememberMe"
              label="Remember me"
            />
          </S.WrapCheckbox>
          {captcha && (
            <>
              <img src={captcha} alt="captcha" />
              <FormInput
                control={control}
                placeholder="enter captcha"
                name="captcha"
              />
            </>
          )}
          <Button
            style={{ height: '46px' }}
            endIcon={
              isLoading ? (
                <div className="loader">
                  <Loader size={18} />
                </div>
              ) : null
            }
            variant="primary"
            type="submit"
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

export default SignIn
