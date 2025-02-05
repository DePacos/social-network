import { z } from 'zod'

export const createEditProfileSchema = () => {
  const max50 = z.string().max(50, 'Field limited to 50 characters')
  const requiredString = z.string().nonempty('This field is required')

  return z.object({
    aboutMe: z
      .string()
      .max(299, 'maximum text length 300 characters')
      .nonempty('This field is required'),
    facebook: max50,
    fullName: z
      .string()
      .nonempty('This field is required')
      .max(50, 'field limited to 50 characters'),
    github: max50,
    instagram: max50,
    lookingForAJob: z.boolean(),
    lookingForAJobDescription: requiredString.max(
      50,
      'field limited to 50 characters',
    ),
    status: max50,
    twitter: max50,
    vk: max50,
    website: max50,
    youtube: max50,
  })
}

export type EditProfileFormData = z.infer<
  ReturnType<typeof createEditProfileSchema>
>
