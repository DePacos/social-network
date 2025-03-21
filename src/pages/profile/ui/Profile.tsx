import { Settings } from 'lucide-react'
import React from 'react'

import { PageLayout } from '@/app/PageLayout/PageLayout'
import { useProfile } from '@/pages/profile/model/useProfile'
import { ProfileAbout } from '@/pages/profile/ui/ProfileAbout'
import { ProfileInfo } from '@/pages/profile/ui/ProfileInfo'
import { ProfileSocial } from '@/pages/profile/ui/ProfileSocial'
import dialogsBg from '@/shared/assets/images/profile-bg.webp'
import { Button } from '@/shared/ui/Button/Button'
import { Toast } from '@/shared/ui/Toast/Toast'

import { S } from './profile.styles'

export const Profile = () => {
  const {
    control,
    editMode,
    handleEditMode,
    handleFollow,
    handleSetPhoto,
    handleSubmit,
    isCurrentUser,
    isFollow,
    isLoading,
    isValid,
    notifications,
    onSubmit,
    profile,
  } = useProfile()

  return (
    <PageLayout
      title={'Profile'}
      image={dialogsBg}
      button={
        <S.ProfileBtnSetting>
          {isCurrentUser ? (
            <Button
              onClick={handleEditMode}
              variant={'primary'}
              endIcon={<Settings />}
            >
              Edit Profile
            </Button>
          ) : (
            <Button variant={'primary'} onClick={handleFollow}>
              {isFollow ? 'Unfollow' : 'Follow'}
            </Button>
          )}
        </S.ProfileBtnSetting>
      }
    >
      <S.Profile onSubmit={handleSubmit(onSubmit)}>
        <ProfileSocial
          isLoading={isLoading}
          editMode={editMode}
          profile={profile}
          control={control}
        />
        <ProfileInfo
          editMode={editMode}
          profile={profile}
          isLoading={isLoading}
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
