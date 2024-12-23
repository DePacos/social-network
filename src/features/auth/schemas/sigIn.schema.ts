import { z } from 'zod'

export const createSignInSchema = () => {
  return z.object({
    captcha: z.string(),
    email: z.string().email('incorrect email address'),
    password: z
      .string()
      .max(20, 'max 20 characters')
      .min(6, 'min 6 characters'),
    // .regex(
    //   new RegExp(/^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/g),
    //   'password is incorrect',
    // ),
    rememberMe: z.boolean(),
  })
}

export type SignInFormData = z.infer<ReturnType<typeof createSignInSchema>>
