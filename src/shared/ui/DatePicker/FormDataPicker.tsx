import { ComponentPropsWithoutRef } from 'react'
import { FieldValues, useController } from 'react-hook-form'

import { FormField } from '@/app/types/types'
import { DatePicker } from '@/shared/ui/DatePicker/DatePicker'

type Props<T extends FieldValues> = {
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'input'> &
  FormField<T>

export const FormDataPicker = <T extends FieldValues>({
  control,
  error,
  label,
  name,
  rules,
  ...props
}: Props<T>) => {
  const { field, fieldState } = useController({ control, name, rules })

  return (
    <DatePicker
      error={error || fieldState.error?.message}
      label={label}
      {...field}
      {...props}
    />
  )
}
