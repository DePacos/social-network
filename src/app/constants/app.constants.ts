export const THEME_MODE = {
  NAME: 'themeMode',
  LIGHT: 'light',
  DARK: 'dark',
} as const

export const ROUTES = {
  HOME: '/',
  SIGN_IN: '/signin',
  PROFILE: '/profile',
  USERS: '/users',
  DIALOGS: '/dialogs',
  CHAT: '/chat',
}

export const REQUEST_STATUS = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
}

export const SOCKET_STATUS = {
  CONNECTED: 'connected',
  DISCONNECTED: 'disconnected',
} as const

export const SLICES_NAME = {
  APP_SLICE: 'app',
  AUTH_SLICE: 'auth',
  CHAT_SLICE: 'chat',
  DIALOGS_SLICE: 'dialogs',
  FOLLOW_SLICE: 'follow',
  PROFILE_SLICE: 'profile',
  USERS_SLICE: 'users',
} as const

export const ERROR_TYPES = {
  APP_ERROR: 'appError',
  CATCH_ERROR: 'catchError',
  UNKNOWN_ERROR: 'unknownError',
} as const

export const ACTION_TYPES = {
  SIGN_IN: 'auth/signIn',
  ME: 'auth/me',
  LOGOUT: 'auth/logout',
  CAPTCHA: 'auth/captcha',
  AVATAR: 'auth/avatar',
} as const

export const API_RESPONSE = {
  SUCCESS: 0,
  ERROR: 1,
  OTHER_ERROR: 10,
} as const

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    ME: '/auth/me',
    CAPTCHA: '/security/get-captcha-url',
  },
  DIALOGS: {
    CHECK_MESSAGE: (messageId: string) =>
      `dialogs/messages/${messageId}/viewed`,
    DELETE_MESSAGE: (messageId: string) => `dialogs/messages/${messageId}`,
    FETCH_DIALOGS: 'dialogs',
    FETCH_MESSAGES: (userId: number) => `dialogs/${userId}/messages`,
    FETCH_MESSAGES_DATE: (userId: number, date: string) =>
      `dialogs/${userId}/messages/new?newerThen=${date}`,
    FETCH_NEW_MESSAGES: 'dialogs/messages/new/count',
    SPAM_MESSAGE: (messageId: string) => `dialogs/messages/${messageId}/spam`,
    REFRESH_DIALOG: (userId: number) => `dialogs/${userId}`,
    RESTORE_MESSAGE: (messageId: string) =>
      `dialogs/messages/${messageId}/restore`,
    SENT_MESSAGES: (userId: number) => `dialogs/${userId}/messages`,
  },
  FOLLOW: (userId: number) => `follow/${userId}`,
  PROFILE: {
    FETCH_PROFILE: (userId: number) => `profile/${userId}`,
    EDIT_PROFILE: 'profile',
    EDIT_PROFILE_PHOTO: 'profile/photo',
    FETCH_PROFILE_STATUS: (userId: number) => `profile/status/${userId}`,
    EDIT_PROFILE_STATUS: 'profile/status',
  },
  USERS: (pageNumber: number, countUsersInPage: number, param: string) =>
    `users?page=${pageNumber}&count=${countUsersInPage}&term=${param}`,
}
