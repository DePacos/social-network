import { z } from 'zod'

export const createSendMessageSchema = () => {
  return z.object({
    message: z.string().max(100, 'maximum message length 100 characters'),
  })
}

export type SendMessage = z.infer<ReturnType<typeof createSendMessageSchema>>
