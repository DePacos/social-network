import React from 'react'
import { Control } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { UserProfileResponse } from '@/app/types/types'
import { EditProfileFormData } from '@/pages/profile/schemas/editProfile.schema'
import { S } from '@/pages/profile/ui/profile.styles'
import facebook from '@/shared/assets/icons/social/facebook.svg'
import github from '@/shared/assets/icons/social/github.svg'
import instagram from '@/shared/assets/icons/social/instagram.svg'
import website from '@/shared/assets/icons/social/site.svg'
import twitter from '@/shared/assets/icons/social/twitter.svg'
import vk from '@/shared/assets/icons/social/vk.svg'
import youtube from '@/shared/assets/icons/social/youtube.svg'
import { FormInput } from '@/shared/ui/Input/FormInput'

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
        {!editMode ? (
          <Link to={profile.contacts.vk || '/'}>
            <img src={vk} alt={'vk-img'} />
          </Link>
        ) : (
          <S.ProfileInputWrap>
            <img src={vk} alt={'vk-img'} />
            <FormInput control={control} name={'vk'} />
          </S.ProfileInputWrap>
        )}
        {!editMode ? (
          <Link to={profile.contacts.facebook || '/'}>
            <img src={facebook} alt={'facebook-img'} />
          </Link>
        ) : (
          <S.ProfileInputWrap>
            <img src={facebook} alt={'facebook-img'} />
            <FormInput control={control} name={'facebook'} />
          </S.ProfileInputWrap>
        )}
        {!editMode ? (
          <Link to={profile.contacts.instagram || '/'}>
            <img src={instagram} alt={'instagram-img'} />
          </Link>
        ) : (
          <S.ProfileInputWrap>
            <img src={instagram} alt={'instagram-img'} />
            <FormInput control={control} name={'instagram'} />
          </S.ProfileInputWrap>
        )}
        {!editMode ? (
          <Link to={profile.contacts.youtube || '/'}>
            <img src={youtube} alt={'youtube-img'} />
          </Link>
        ) : (
          <S.ProfileInputWrap>
            <img src={youtube} alt={'youtube-img'} />
            <FormInput control={control} name={'youtube'} />
          </S.ProfileInputWrap>
        )}
        {!editMode ? (
          <Link to={profile.contacts.twitter || '/'}>
            <img src={twitter} alt={'x-img'} />
          </Link>
        ) : (
          <S.ProfileInputWrap>
            <img src={twitter} alt={'x-img'} />
            <FormInput control={control} name={'twitter'} />
          </S.ProfileInputWrap>
        )}
        {!editMode ? (
          <Link to={profile.contacts.github || '/'}>
            <img src={github} alt={'github-img'} />
          </Link>
        ) : (
          <S.ProfileInputWrap>
            <img src={github} alt={'github-img'} />
            <FormInput control={control} name={'github'} />
          </S.ProfileInputWrap>
        )}
        {!editMode ? (
          <Link title={'My Site'} to={profile.contacts.website || '/'}>
            <img src={website} alt={'website-img'} />
          </Link>
        ) : (
          <S.ProfileInputWrap>
            <img src={website} alt={'website-img'} />
            <FormInput control={control} name={'website'} />
          </S.ProfileInputWrap>
        )}
      </div>
      <S.ProfileJobDesc>
        <h2>Job Description</h2>
        {!editMode ? (
          isLoading ? (
            <S.SkeletonName />
          ) : (
            <p>
              {profile.lookingForAJobDescription
                ? profile.lookingForAJobDescription
                : 'Fill in the profile'}
            </p>
          )
        ) : (
          <FormInput
            control={control}
            defaultValue={profile.lookingForAJobDescription}
            name={'lookingForAJobDescription'}
          />
        )}
      </S.ProfileJobDesc>
    </S.ProfileSocial>
  )
}
