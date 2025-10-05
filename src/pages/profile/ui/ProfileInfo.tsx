import {
  CircleX,
  SquareCheckBig,
  SquareUserRound,
  UserRoundPen,
} from 'lucide-react'
import { type Control } from 'react-hook-form'

import { type UserProfileResponse } from '@/app/types'
import { type EditProfileFormData } from '@/pages/profile/schemas/editProfile.schema'
import { FormCheckbox, FormInput, Upload } from '@/shared/ui'

import { S } from './Profile.styles.ts'

type Props = {
  editMode: boolean
  isLoading: boolean
  profile: UserProfileResponse & { status: string }
  control: Control<EditProfileFormData>
  handleSetPhoto: (file: File) => void
}

const RenderUserAvatar = (profile: UserProfileResponse & { status: string }) =>
  profile.photos.large ? (
    <img src={profile.photos.large} alt="avatar" />
  ) : (
    <S.ProfileAvatarSvg>
      <SquareUserRound strokeWidth={1} size={180} viewBox="2 2 20 20" />
    </S.ProfileAvatarSvg>
  )

export const ProfileInfo = ({
  control,
  editMode,
  handleSetPhoto,
  isLoading,
  profile,
}: Props) => {
  return (
    <S.ProfileInfo>
      {isLoading ? <S.SkeletonAvatar /> : RenderUserAvatar(profile)}
      {editMode ? (
        <>
          <S.ProfileUploadImg>
            <Upload
              children={<UserRoundPen size={20} />}
              variant="icon"
              onChange={handleSetPhoto}
            />
          </S.ProfileUploadImg>
          <FormInput label="Name" control={control} name="fullName" />
          <FormInput label="Status" control={control} name="status" />
          <FormCheckbox
            label="Looking for a job"
            name="lookingForAJob"
            control={control}
          />
        </>
      ) : (
        <>
          {isLoading ? <S.SkeletonName /> : <p>{profile.fullName}</p>}
          <p>
            Looking for a job{' '}
            {profile.lookingForAJob ? (
              <SquareCheckBig size={28} color="mediumspringgreen" />
            ) : (
              <CircleX size={28} color="darkorange" />
            )}
          </p>
          {isLoading ? (
            <S.SkeletonName />
          ) : (
            <p>{profile.status || 'Set your status'}</p>
          )}
        </>
      )}
    </S.ProfileInfo>
  )
}
