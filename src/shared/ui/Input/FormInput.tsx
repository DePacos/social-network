import { ComponentPropsWithoutRef, ReactNode } from 'react'
import { FieldValues, useController } from 'react-hook-form'

import { FormField, InputTypes } from '@/app/types/types'
import { Input } from '@/shared/ui/Input/Input'

type Props<T extends FieldValues> = {
  type?: InputTypes
  error?: string
  label?: string
  iconPadding?: string
  iconStart?: ReactNode
  iconEnd?: ReactNode
} & ComponentPropsWithoutRef<'input'> &
  FormField<T>

export const FormInput = <T extends FieldValues>({
  control,
  error,
  iconEnd,
  iconPadding,
  iconStart,
  label,
  name,
  rules,
  type,
  ...props
}: Props<T>) => {
  const { field, fieldState } = useController<T>({ control, name, rules })

  return (
    <Input
      {...field}
      type={type}
      iconPadding={iconPadding}
      label={label}
      error={error ?? fieldState.error?.message}
      iconStart={iconStart}
      iconEnd={iconEnd}
      {...props}
    />
  )
}
