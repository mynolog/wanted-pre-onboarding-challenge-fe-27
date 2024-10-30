import axios from 'axios'

const BASE_URL = 'http://localhost'
const PORT = '8080'

const api = axios.create({
  baseURL: `${BASE_URL}:${PORT}`,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
