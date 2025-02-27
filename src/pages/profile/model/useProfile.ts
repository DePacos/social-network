import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { useAppDispatch } from '@/app/hooks/useStateHook'
import { UserProfileResponse } from '@/app/types/types'
import {
  editUserPhoto,
  editUserProfile,
  editUserStatus,
} from '@/entities/reducers/profileSlice'
import {
  createEditProfileSchema,
  EditProfileFormData,
} from '@/pages/profile/schemas/editProfile.schema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useProfile = (
  profile: UserProfileResponse & { status: string },
) => {
  const [editMode, setEditMode] = useState(false)
  const dispatch = useAppDispatch()

  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<EditProfileFormData>({
    mode: 'onChange',
    resolver: zodResolver(createEditProfileSchema()),
  })

  const handleEditMode = () => {
    setEditMode(prevState => !prevState)
  }

  const handleSetPhoto = (file: File) => {
    const data = new FormData()

    data.append('photo', file)

    dispatch(editUserPhoto(data))
  }

  useEffect(() => {
    reset({
      aboutMe: profile.aboutMe,
      facebook: profile.contacts.facebook || '',
      fullName: profile.fullName,
      github: profile.contacts.github || '',
      instagram: profile.contacts.instagram || '',
      lookingForAJob: profile.lookingForAJob,
      lookingForAJobDescription: profile.lookingForAJobDescription,
      status: profile.status || '',
      twitter: profile.contacts.twitter || '',
      vk: profile.contacts.vk || '',
      website: profile.contacts.website || '',
      youtube: profile.contacts.youtube || '',
    })
  }, [profile])

  const onSubmit = (data: EditProfileFormData) => {
    const contacts = [
      'facebook',
      'website',
      'github',
      'instagram',
      'vk',
      `twitter`,
      'youtube',
    ]

    //TODO fix any
    const dataRequest: any = {
      aboutMe: '',
      contacts: {},
      fullName: '',
      lookingForAJobDescription: '',
    }

    for (const field in data) {
      if (!contacts.includes(field as keyof EditProfileFormData)) {
        dataRequest[field] = data[field as keyof EditProfileFormData]
      } else {
        dataRequest.contacts = {
          ...dataRequest.contacts,
          [field]: data[field as keyof EditProfileFormData] as string,
        }
      }
    }

    if (data.status !== profile.status) {
      dispatch(editUserStatus({ status: data.status }))
    }

    dispatch(editUserProfile(dataRequest))
  }

  return {
    control,
    editMode,
    handleEditMode,
    handleSetPhoto,
    handleSubmit,
    isValid,
    onSubmit,
  }
}
