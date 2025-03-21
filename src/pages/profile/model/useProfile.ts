import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '@/app/hooks/useStateHook'
import {
  selectAppIsLoading,
  selectAppNotifications,
} from '@/entities/reducers/appSlice'
import { selectAuthUserId } from '@/entities/reducers/authSlice'
import {
  follow,
  getFollow,
  removeFollow,
  selectFollow,
} from '@/entities/reducers/followSlice'
import {
  editUserPhoto,
  editUserProfile,
  editUserStatus,
  getUserProfile,
  selectProfile,
} from '@/entities/reducers/profileSlice'
import {
  createEditProfileSchema,
  EditProfileFormData,
} from '@/pages/profile/schemas/editProfile.schema'
import { zodResolver } from '@hookform/resolvers/zod'

export const useProfile = () => {
  const [editMode, setEditMode] = useState(false)
  const dispatch = useAppDispatch()
  const isFollow = useAppSelector(selectFollow)
  const profile = useAppSelector(selectProfile)
  const notifications = useAppSelector(selectAppNotifications)
  const isLoading = useAppSelector(selectAppIsLoading)
  const currentUserId = useAppSelector(selectAuthUserId)

  const { id } = useParams()
  const isCurrentUser = currentUserId === Number(id)

  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<EditProfileFormData>({
    mode: 'onChange',
    resolver: zodResolver(createEditProfileSchema()),
  })

  const handleFollow = () => {
    if (isFollow) {
      dispatch(removeFollow(Number(id)))
    } else {
      dispatch(follow(Number(id)))
    }
  }

  const handleEditMode = () => {
    setEditMode(prevState => !prevState)
  }

  const handleSetPhoto = (file: File) => {
    const data = new FormData()

    data.append('photo', file)
    dispatch(editUserPhoto(data))
  }

  const resetForm = () => {
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
  }

  useEffect(() => {
    if (id && profile.userId !== +id) {
      dispatch(getUserProfile(Number(id)))
      dispatch(getFollow(Number(id)))
    }
    if (!isCurrentUser) {
      setEditMode(false)
    }
    resetForm()
  }, [id, profile])

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
  }
}
