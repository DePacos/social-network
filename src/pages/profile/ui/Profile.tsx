import { Settings } from 'lucide-react'

import { PageLayout } from '@/app/pageLayout/PageLayout'
import { ProfileAbout, ProfileInfo, ProfileSocial } from '@/pages/profile/ui'
import dialogsBg from '@/shared/assets/images/profile-bg.webp'
import { Button, Toast } from '@/shared/ui'

import { useProfile } from '../model/useProfile'
import { S } from './Profile.styles.ts'

const Profile = () => {
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
      title="Profile"
      image={dialogsBg}
      button={
        <S.ProfileBtnSetting>
          {isCurrentUser ? (
            <Button
              onClick={handleEditMode}
              variant="primary"
              endIcon={<Settings />}
            >
              Edit Profile
            </Button>
          ) : (
            <Button variant="primary" onClick={handleFollow}>
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
      {notifications.value && <Toast notification={notifications.value} />}
    </PageLayout>
  )
}

export default Profile
