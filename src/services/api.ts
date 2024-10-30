import axios from 'axios'
import store from '../store/store'

const BASE_URL = 'http://localhost'
const PORT = '8080'

const api = axios.create({
  baseURL: `${BASE_URL}:${PORT}`,
  timeout: 1500,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const state = store.getState()
  const token = state.auth.user?.token
  if (token) {
    config.headers.Authorization = token
  }

  return config
})

export default api
