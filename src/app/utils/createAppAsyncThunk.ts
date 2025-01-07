import {
  AppDispatch,
  AppRootState,
  RejectAppError,
  RejectCatchError,
} from '@/app/types/types'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppRootState
  dispatch: AppDispatch
  rejectValue: RejectCatchError | RejectAppError
}>()
