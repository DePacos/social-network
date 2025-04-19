const WEB_SOCKET_URL =
  'wss://social-network.samuraijs.com/handlers/ChatHandler.ashx'

export const connectToSocket = async () => {
  const socket = new WebSocket(WEB_SOCKET_URL)

  return await new Promise<WebSocket | string>((resolve, reject) => {
    socket.onopen = () => resolve(socket)
    socket.onerror = () => reject('connectionToSocket error')
  })
}
