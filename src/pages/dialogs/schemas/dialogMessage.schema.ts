import { z } from 'zod'

export const createDialogMessageSchema = () => {
  return z.object({
    message: z.string().max(100, 'maximum message length 100 characters'),
  })
}

export type DialogMessage = z.infer<
  ReturnType<typeof createDialogMessageSchema>
>
