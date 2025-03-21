import { Loader } from 'lucide-react'
import React from 'react'
import { Control } from 'react-hook-form'

import { UserProfileResponse } from '@/app/types/types'
import { EditProfileFormData } from '@/pages/profile/schemas/editProfile.schema'
import { S } from '@/pages/profile/ui/profile.styles'
import { Button } from '@/shared/ui/Button/Button'
import { FormTextArea } from '@/shared/ui/TextArea/FormTextArea'

type Props = {
  editMode: boolean
  profile: UserProfileResponse
  control: Control<EditProfileFormData>
  isLoading: boolean
  isValid: boolean
}

export const ProfileAbout = ({
  control,
  editMode,
  isLoading,
  isValid,
  profile,
}: Props) => (
  <S.ProfileAbout>
    <h2>About Me</h2>
    {!editMode ? (
      isLoading ? (
        <S.SkeletonName />
      ) : (
        <p>{profile.aboutMe ? profile.aboutMe : 'Fill in the profile'}</p>
      )
    ) : (
      <FormTextArea
        maxLength={300}
        control={control}
        name={'aboutMe'}
        disabled={isLoading}
      />
    )}
    {editMode ? (
      <Button
        disabled={!isValid}
        type={'submit'}
        variant={'primary'}
        endIcon={
          isLoading ? (
            <div className={'loader'}>
              <Loader size={18} />
            </div>
          ) : null
        }
      >
        Saving
      </Button>
    ) : null}
  </S.ProfileAbout>
)
