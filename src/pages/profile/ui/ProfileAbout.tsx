import { Loader } from 'lucide-react'
import { type Control } from 'react-hook-form'

import { type UserProfileResponse } from '@/app/types'
import { type EditProfileFormData } from '@/pages/profile/schemas/editProfile.schema'
import { Button, FormTextArea } from '@/shared/ui'

import { S } from './Profile.styles.ts'

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
    {editMode ? (
      <FormTextArea
        maxLength={300}
        control={control}
        name="aboutMe"
        disabled={isLoading}
      />
    ) : isLoading ? (
      <S.SkeletonName />
    ) : (
      <p>{profile?.aboutMe || 'Fill in the profile'}</p>
    )}
    {editMode ? (
      <Button
        disabled={!isValid}
        type="submit"
        variant="primary"
        endIcon={
          isLoading ? (
            <div className="loader">
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
