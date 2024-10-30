import { isAxiosError } from 'axios'
import api from '../api'

interface AuthRequest {
  email: string
  password: string
}

interface AuthResponse {
  data: {
    message: string
    token: string
  }
  status: number
}

const SIGN_UP = 'users/create'
const LOGIN = 'users/login'

export const signUpService = async ({ email, password }: AuthRequest) => {
  try {
    const response: AuthResponse = await api.post(SIGN_UP, {
      email,
      password,
    })
    if (response.status === 200) {
      return response.data
    }
  } catch (e) {
    if (isAxiosError(e) && e.response) {
      console.error(e.response)
      throw new Error(e.response.data.details)
    }
  }
}

export const loginService = async ({ email, password }: AuthRequest) => {
  try {
    const response: AuthResponse = await api.post(LOGIN, {
      email,
      password,
    })
    if (response.status === 200) {
      return response.data
    }
  } catch (e) {
    if (isAxiosError(e) && e.response) {
      console.error(e.response)
      throw new Error(e.response.data.details)
    }
  }
}
