import {
  CircleX,
  Loader,
  Settings,
  SquareCheckBig,
  SquareUserRound,
  UserRoundPen,
} from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/app/hooks/stateHook'
import { PageLayout } from '@/app/PageLayout/PageLayout'
import {
  selectAppIsLoading,
  selectAppNotifications,
} from '@/entities/reducers/appSlice'
import { editUserPhoto, selectProfile } from '@/entities/reducers/profileSlice'
import { useEditProfile } from '@/pages/profile/useEditProfile'
import facebook from '@/shared/assets/icons/social/facebook.svg'
import github from '@/shared/assets/icons/social/github.svg'
import instagram from '@/shared/assets/icons/social/instagram.svg'
import website from '@/shared/assets/icons/social/site.svg'
import twitter from '@/shared/assets/icons/social/twitter.svg'
import vk from '@/shared/assets/icons/social/vk.svg'
import youtube from '@/shared/assets/icons/social/youtube.svg'
import dialogsBg from '@/shared/assets/images/profile-bg.webp'
import { Button } from '@/shared/ui/Button/Button'
import { FormCheckbox } from '@/shared/ui/Checkbox/FormCheckbox'
import { FormInput } from '@/shared/ui/Input/FormInput'
import { FormTextArea } from '@/shared/ui/TextArea/FormTextArea'
import { Toast } from '@/shared/ui/Toast/Toast'
import { Upload } from '@/shared/ui/Upload/Upload'

import { S } from './profile.styles'

export const Profile = () => {
  const dispatch = useAppDispatch()

  const profile = useAppSelector(selectProfile)
  const notifications = useAppSelector(selectAppNotifications)
  const isLoading = useAppSelector(selectAppIsLoading)
  const [editMode, setEditMode] = useState(false)

  const handlerEditMode = () => {
    setEditMode(prevState => !prevState)
  }

  const handlerSetPhoto = (file: File) => {
    const data = new FormData()

    data.append('photo', file)

    dispatch(editUserPhoto(data))
  }

  console.log('profile', profile)

  const { control, handleSubmit, isValid, onSubmit } = useEditProfile(profile)

  return (
    <PageLayout
      title={'Profile'}
      image={dialogsBg}
      button={
        <S.ProfileBtnSetting>
          <Button
            onClick={handlerEditMode}
            variant={'primary'}
            endIcon={<Settings />}
          >
            Edit Profile
          </Button>
        </S.ProfileBtnSetting>
      }
    >
      <S.Profile onSubmit={handleSubmit(onSubmit)}>
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
                <FormInput
                  control={control}
                  name={'vk'}
                  defaultValue={profile.contacts.vk}
                />
              </S.ProfileInputWrap>
            )}
            {!editMode ? (
              <Link to={profile.contacts.facebook || '/'}>
                <img src={facebook} alt={'facebook-img'} />
              </Link>
            ) : (
              <S.ProfileInputWrap>
                <img src={facebook} alt={'facebook-img'} />
                <FormInput
                  control={control}
                  name={'facebook'}
                  defaultValue={profile.contacts.facebook}
                />
              </S.ProfileInputWrap>
            )}
            {!editMode ? (
              <Link to={profile.contacts.instagram || '/'}>
                <img src={instagram} alt={'instagram-img'} />
              </Link>
            ) : (
              <S.ProfileInputWrap>
                <img src={instagram} alt={'instagram-img'} />
                <FormInput
                  control={control}
                  name={'instagram'}
                  defaultValue={profile.contacts.instagram}
                />
              </S.ProfileInputWrap>
            )}
            {!editMode ? (
              <Link to={profile.contacts.youtube || '/'}>
                <img src={youtube} alt={'youtube-img'} />
              </Link>
            ) : (
              <S.ProfileInputWrap>
                <img src={youtube} alt={'youtube-img'} />
                <FormInput
                  control={control}
                  name={'youtube'}
                  defaultValue={profile.contacts.youtube}
                />
              </S.ProfileInputWrap>
            )}
            {!editMode ? (
              <Link to={profile.contacts.twitter || '/'}>
                <img src={twitter} alt={'x-img'} />
              </Link>
            ) : (
              <S.ProfileInputWrap>
                <img src={twitter} alt={'x-img'} />
                <FormInput
                  control={control}
                  name={'twitter'}
                  defaultValue={profile.contacts.twitter}
                />
              </S.ProfileInputWrap>
            )}
            {!editMode ? (
              <Link to={profile.contacts.github || '/'}>
                <img src={github} alt={'github-img'} />
              </Link>
            ) : (
              <S.ProfileInputWrap>
                <img src={github} alt={'github-img'} />
                <FormInput
                  control={control}
                  name={'github'}
                  defaultValue={profile.contacts.github}
                />
              </S.ProfileInputWrap>
            )}
            {!editMode ? (
              <Link title={'My Site'} to={profile.contacts.website || '/'}>
                <img src={website} alt={'website-img'} />
              </Link>
            ) : (
              <S.ProfileInputWrap>
                <img src={website} alt={'website-img'} />
                <FormInput
                  control={control}
                  name={'website'}
                  defaultValue={profile.contacts.website}
                />
              </S.ProfileInputWrap>
            )}
          </div>
          <S.ProfileJobDesc>
            <h2>Job Description</h2>
            {!editMode ? (
              <p>
                {profile.lookingForAJobDescription !== ''
                  ? profile.lookingForAJobDescription
                  : 'Fill in the profile'}
              </p>
            ) : (
              <FormInput
                control={control}
                defaultValue={profile.lookingForAJobDescription}
                name={'lookingForAJobDescription'}
              />
            )}
          </S.ProfileJobDesc>
        </S.ProfileSocial>
        <S.ProfileInfo>
          {profile.photos.large ? (
            <img src={profile.photos.large} alt={'avatar'} />
          ) : (
            <S.ProfileAvatarSvg>
              <SquareUserRound
                strokeWidth={1}
                size={180}
                viewBox={'2 2 20 20'}
              />
            </S.ProfileAvatarSvg>
          )}
          {!editMode ? (
            <>
              <p>{profile.fullName}</p>
              <p>
                Looking for a job{' '}
                {profile.lookingForAJob ? (
                  <SquareCheckBig size={28} color={'mediumspringgreen'} />
                ) : (
                  <CircleX size={28} color={'darkorange'} />
                )}
              </p>
              <p>{profile.status || 'Set your status'}</p>
            </>
          ) : (
            <>
              <S.ProfileUploadImg>
                <Upload
                  children={<UserRoundPen size={20} />}
                  variant={'icon'}
                  onChange={handlerSetPhoto}
                />
              </S.ProfileUploadImg>
              <FormInput
                label={'Name'}
                control={control}
                name={'fullName'}
                defaultValue={profile.fullName}
              />
              <FormInput
                label={'Status'}
                control={control}
                name={'status'}
                defaultValue={profile.status}
              />
              <FormCheckbox
                label={'Looking for a job'}
                name={'lookingForAJob'}
                control={control}
                defaultChecked={profile.lookingForAJob}
              />
            </>
          )}
        </S.ProfileInfo>
        <S.ProfileAbout>
          <h2>About Me</h2>
          {!editMode ? (
            <p>
              {profile.aboutMe !== '' ? profile.aboutMe : 'Fill in the profile'}
            </p>
          ) : (
            <FormTextArea
              maxLength={300}
              control={control}
              name={'aboutMe'}
              defaultValue={profile.aboutMe}
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
      </S.Profile>
      <Toast notification={notifications.value} />
    </PageLayout>
  )
}
