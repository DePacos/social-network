import {
  AppNotification,
  RejectAppError,
  RejectCatchError,
} from '@/app/types/types'

export const handlerErrors = (
  error: RejectAppError | RejectCatchError,
): AppNotification => {
  if (error.type === 'appError') {
    const errorValue =
      error.error.messages[0] === 'You are not authorized'
        ? ''
        : error.error.messages.join(' | ')

    return { type: 'appError', value: errorValue }
  }
  if (error.type === 'catchError') {
    return { type: 'catchError', value: error.error.message }
  }

  return { type: 'unknownError', value: 'unknown error' }
}
