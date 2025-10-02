import { createAsyncThunk } from '@reduxjs/toolkit'

import type {
  AppDispatch,
  AppRootState,
  RejectAppError,
  RejectCatchError,
} from '@/app/types'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppRootState
  dispatch: AppDispatch
  rejectValue: RejectCatchError | RejectAppError
}>()
