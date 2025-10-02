import { type ComponentPropsWithoutRef } from 'react'
import { type FieldValues, useController } from 'react-hook-form'

import { type FormField } from '@/app/types'
import { TextArea } from '@/shared/ui/TextArea'

type Props<T extends FieldValues> = {
  error?: string
  label?: string
  textAreaStyles?: { [key: string]: string | number }
  wrapStyles?: { [key: string]: string | number }
} & ComponentPropsWithoutRef<'textarea'> &
  FormField<T>

export const FormTextArea = <T extends FieldValues>({
  control,
  error,
  label,
  name,
  rules,
  ...props
}: Props<T>) => {
  const { field, fieldState } = useController<T>({ control, name, rules })

  return (
    <TextArea
      {...field}
      error={error ?? fieldState.error?.message}
      label={label}
      {...props}
    />
  )
}
