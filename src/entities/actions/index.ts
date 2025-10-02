export { setNotifications } from '../slices/appSlice'

export {
  sendMessage,
  setMessages,
  connectToWebsocket,
  disconnectWebsocket,
} from '../slices/chatSlice'

export {
  fetchDialogs,
  fetchMessages,
  filterDialogMessages,
  restoreMessage,
  getNewMessages,
  deleteMessage,
  refreshDialogs,
  sendDialogMessage,
  setMessageIsSpam,
  setUserDialog,
} from '../slices/dialogSlice'

export { follow, getFollow, removeFollow } from '../slices/followSlice'

export {
  getUserProfile,
  editUserPhoto,
  editUserProfile,
  editUserStatus,
} from '../slices/profileSlice'

export { getUsers, clearUsers } from '../slices/usersSlice'
