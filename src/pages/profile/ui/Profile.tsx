import { Settings } from 'lucide-react'
import React from 'react'

import { useAppSelector } from '@/app/hooks/useStateHook'
import { PageLayout } from '@/app/PageLayout/PageLayout'
import {
  selectAppIsLoading,
  selectAppNotifications,
} from '@/entities/reducers/appSlice'
import { selectProfile } from '@/entities/reducers/profileSlice'
import { useProfile } from '@/pages/profile/model/useProfile'
import { ProfileAbout } from '@/pages/profile/ui/ProfileAbout'
import { ProfileInfo } from '@/pages/profile/ui/ProfileInfo'
import { ProfileSocial } from '@/pages/profile/ui/ProfileSocial'
import dialogsBg from '@/shared/assets/images/profile-bg.webp'
import { Button } from '@/shared/ui/Button/Button'
import { Toast } from '@/shared/ui/Toast/Toast'

import { S } from './profile.styles'

export const Profile = () => {
  const profile = useAppSelector(selectProfile)
  const notifications = useAppSelector(selectAppNotifications)
  const isLoading = useAppSelector(selectAppIsLoading)

  const {
    control,
    editMode,
    handleEditMode,
    handleSetPhoto,
    handleSubmit,
    isValid,
    onSubmit,
  } = useProfile(profile)

  return (
    <PageLayout
      title={'Profile'}
      image={dialogsBg}
      button={
        <S.ProfileBtnSetting>
          <Button
            onClick={handleEditMode}
            variant={'primary'}
            endIcon={<Settings />}
          >
            Edit Profile
          </Button>
        </S.ProfileBtnSetting>
      }
    >
      <S.Profile onSubmit={handleSubmit(onSubmit)}>
        <ProfileSocial
          editMode={editMode}
          profile={profile}
          control={control}
        />
        <ProfileInfo
          editMode={editMode}
          profile={profile}
          control={control}
          handleSetPhoto={handleSetPhoto}
        />
        <ProfileAbout
          editMode={editMode}
          profile={profile}
          control={control}
          isLoading={isLoading}
          isValid={isValid}
        />
      </S.Profile>
      <Toast notification={notifications.value} />
    </PageLayout>
  )
}
