import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: { 'API-KEY': `${import.meta.env.VITE_API_KEY}` },
  withCredentials: true,
})
