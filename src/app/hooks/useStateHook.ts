import {
  type TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from 'react-redux'

import type { AppDispatch, AppRootState } from '@/app/types/app.types.ts'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
