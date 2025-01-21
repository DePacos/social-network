import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': 'b30b7bb6-50d0-48c1-a6fd-b3a9c7548470' },
  withCredentials: true,
})
