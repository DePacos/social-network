import type {
  AppNotification,
  RejectAppError,
  RejectCatchError,
} from '@/app/types'

import { ERROR_TYPES } from '@/app/constants'

export const handlerErrors = (
  error: RejectAppError | RejectCatchError,
): AppNotification => {
  if (error?.type === ERROR_TYPES.APP_ERROR) {
    const errorValue = error.error.messages.join(' | ')
    return { type: ERROR_TYPES.APP_ERROR, value: errorValue }
  }

  if (error?.type === ERROR_TYPES.CATCH_ERROR) {
    return { type: ERROR_TYPES.CATCH_ERROR, value: error.error.message }
  }

  return { type: ERROR_TYPES.UNKNOWN_ERROR, value: ERROR_TYPES.UNKNOWN_ERROR }
}
