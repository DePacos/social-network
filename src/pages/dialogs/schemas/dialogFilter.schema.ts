import { z } from 'zod'

export const createDialogFilterSchema = () => {
  return z.object({
    date: z
      .date()
      .transform(value => new Date(value))
      .refine(date => date.toString() !== 'Invalid Date', {
        message: 'Invalid date format',
      })
      .refine(date => date >= new Date('2020-01-01'), {
        message: 'Date must be after 2020-01-01',
      })
      .refine(date => date <= new Date(), {
        message: 'Date cannot be in the future',
      }),
  })
}

export type FilterDialogMessages = z.infer<
  ReturnType<typeof createDialogFilterSchema>
>
