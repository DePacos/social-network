import { ComponentPropsWithoutRef } from 'react'
import { FieldValues, useController } from 'react-hook-form'

import { FormField } from '@/app/types/types'
import { Select } from '@/shared/ui/Select/Select'

type Props<T extends FieldValues> = {
  options: { value: string; label: string }[]
  error?: string
  label?: string
} & ComponentPropsWithoutRef<'button'> &
  FormField<T>

export const FormSelect = <T extends FieldValues>({
  control,
  error,
  name,
  options,
  rules,
  ...props
}: Props<T>) => {
  const { field, fieldState } = useController({ control, name, rules })

  return (
    <Select
      {...props}
      error={error ?? fieldState.error?.message}
      options={options}
      {...field}
    />
  )
}
