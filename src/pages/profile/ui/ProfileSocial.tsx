import { type Control } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { type UserProfileResponse } from '@/app/types'
import { type EditProfileFormData } from '@/pages/profile/schemas/editProfile.schema'
import {
  facebook,
  github,
  instagram,
  site,
  twitter,
  vk,
  youtube,
} from '@/shared/assets/icons/social'
import { FormInput } from '@/shared/ui'

import { S } from './Profile.styles.ts'

type Props = {
  editMode: boolean
  profile: UserProfileResponse
  control: Control<EditProfileFormData>
  isLoading: boolean
}

export const ProfileSocial = ({
  control,
  editMode,
  isLoading,
  profile,
}: Props) => {
  return (
    <S.ProfileSocial>
      <h2>Contacts</h2>
      <div>
        {editMode ? (
          <S.ProfileInputWrap>
            <img src={vk} alt="vk-img" />
            <FormInput control={control} name="vk" />
          </S.ProfileInputWrap>
        ) : (
          <Link to={profile.contacts.vk || '#'}>
            <img src={vk} alt="vk-img" />
          </Link>
        )}
        {editMode ? (
          <S.ProfileInputWrap>
            <img src={facebook} alt="facebook-img" />
            <FormInput control={control} name="facebook" />
          </S.ProfileInputWrap>
        ) : (
          <Link to={profile.contacts.facebook || '#'}>
            <img src={facebook} alt="facebook-img" />
          </Link>
        )}
        {editMode ? (
          <S.ProfileInputWrap>
            <img src={instagram} alt="instagram-img" />
            <FormInput control={control} name="instagram" />
          </S.ProfileInputWrap>
        ) : (
          <Link to={profile.contacts.instagram || '#'}>
            <img src={instagram} alt="instagram-img" />
          </Link>
        )}
        {editMode ? (
          <S.ProfileInputWrap>
            <img src={youtube} alt="youtube-img" />
            <FormInput control={control} name="youtube" />
          </S.ProfileInputWrap>
        ) : (
          <Link to={profile.contacts.youtube || '#'}>
            <img src={youtube} alt="youtube-img" />
          </Link>
        )}
        {editMode ? (
          <S.ProfileInputWrap>
            <img src={twitter} alt="x-img" />
            <FormInput control={control} name="twitter" />
          </S.ProfileInputWrap>
        ) : (
          <Link to={profile.contacts.twitter || '#'}>
            <img src={twitter} alt="x-img" />
          </Link>
        )}
        {editMode ? (
          <S.ProfileInputWrap>
            <img src={github} alt="github-img" />
            <FormInput control={control} name="github" />
          </S.ProfileInputWrap>
        ) : (
          <Link to={profile.contacts.github || '#'}>
            <img src={github} alt="github-img" />
          </Link>
        )}
        {editMode ? (
          <S.ProfileInputWrap>
            <img src={site} alt="website-img" />
            <FormInput control={control} name="website" />
          </S.ProfileInputWrap>
        ) : (
          <Link title="My Site" to={profile.contacts.website || '#'}>
            <img src={site} alt="website-img" />
          </Link>
        )}
      </div>
      <S.ProfileJobDesc>
        <h2>Job Description</h2>
        {editMode ? (
          <FormInput control={control} name="lookingForAJobDescription" />
        ) : isLoading ? (
          <S.SkeletonName />
        ) : (
          <p>{profile?.lookingForAJobDescription || 'Fill in the profile'}</p>
        )}
      </S.ProfileJobDesc>
    </S.ProfileSocial>
  )
}
