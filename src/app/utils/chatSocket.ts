export const connectToSocket = async () => {
  const socket = new WebSocket(import.meta.env.VITE_SOCKET_URL)

  return new Promise<WebSocket>((resolve, reject) => {
    socket.addEventListener('open', () => resolve(socket))
    socket.addEventListener('error', () => reject('socket connection failed'))
  })
}
