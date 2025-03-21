import {
  CircleX,
  SquareCheckBig,
  SquareUserRound,
  UserRoundPen,
} from 'lucide-react'
import React from 'react'
import { Control } from 'react-hook-form'

import { UserProfileResponse } from '@/app/types/types'
import { EditProfileFormData } from '@/pages/profile/schemas/editProfile.schema'
import { S } from '@/pages/profile/ui/profile.styles'
import { FormCheckbox } from '@/shared/ui/Checkbox/FormCheckbox'
import { FormInput } from '@/shared/ui/Input/FormInput'
import { Upload } from '@/shared/ui/Upload/Upload'

type Props = {
  editMode: boolean
  isLoading: boolean
  profile: UserProfileResponse & { status: string }
  control: Control<EditProfileFormData>
  handleSetPhoto: (file: File) => void
}

export const ProfileInfo = ({
  control,
  editMode,
  handleSetPhoto,
  isLoading,
  profile,
}: Props) => {
  return (
    <S.ProfileInfo>
      {profile.photos.large ? (
        <img src={profile.photos.large} alt={'avatar'} />
      ) : (
        <S.ProfileAvatarSvg>
          {isLoading ? (
            <S.SkeletonAvatar />
          ) : (
            <SquareUserRound strokeWidth={1} size={180} viewBox={'2 2 20 20'} />
          )}
        </S.ProfileAvatarSvg>
      )}
      {!editMode ? (
        <>
          {isLoading ? <S.SkeletonName /> : <p>{profile.fullName}</p>}
          <p>
            Looking for a job{' '}
            {profile.lookingForAJob ? (
              <SquareCheckBig size={28} color={'mediumspringgreen'} />
            ) : (
              <CircleX size={28} color={'darkorange'} />
            )}
          </p>
          {isLoading ? (
            <S.SkeletonName />
          ) : (
            <p>{profile.status || 'Set your status'}</p>
          )}
        </>
      ) : (
        <>
          <S.ProfileUploadImg>
            <Upload
              children={<UserRoundPen size={20} />}
              variant={'icon'}
              onChange={handleSetPhoto}
            />
          </S.ProfileUploadImg>
          <FormInput label={'Name'} control={control} name={'fullName'} />
          <FormInput label={'Status'} control={control} name={'status'} />
          <FormCheckbox
            label={'Looking for a job'}
            name={'lookingForAJob'}
            control={control}
          />
        </>
      )}
    </S.ProfileInfo>
  )
}
