import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { FieldValues, useController } from 'react-hook-form'

import { FormField } from '@/app/types/types'
import { CheckBox } from '@/shared/ui/Checkbox/Checkbox'

export type Props<T extends FieldValues> = {
  error?: string | undefined
  label?: ReactNode | undefined
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
      error={error ?? fieldState.error?.message}
      label={label}
      {...props}
    />
  )
}
