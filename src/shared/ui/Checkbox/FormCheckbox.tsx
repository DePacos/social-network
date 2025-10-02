import { type ComponentPropsWithoutRef } from 'react'
import { type FieldValues, useController } from 'react-hook-form'

import { type FormField } from '@/app/types'
import { CheckBox } from '@/shared/ui/Checkbox'

export type Props<T extends FieldValues> = {
  error?: string | undefined
  label: string | undefined
} & ComponentPropsWithoutRef<'input'> &
  FormField<T>

export const FormCheckbox = <T extends FieldValues>({
  control,
  error,
  label,
  name,
  rules,
  ...props
}: Props<T>) => {
  const { field, fieldState } = useController<T>({ control, name, rules })

  return (
    <CheckBox
      {...field}
      error={error || fieldState.error?.message}
      label={label}
      {...props}
    />
  )
}
