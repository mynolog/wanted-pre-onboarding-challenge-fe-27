import { isAxiosError } from 'axios'
// import { Store } from '../../store/slices/auth/authSlice'
import api from '../api'

interface SignUpRequest {
  email: string
  password: string
}

interface SignUpResponse {
  data: {
    message: string
    token: string
  }
  status: number
}

export const signUpService = async ({ email, password }: SignUpRequest) => {
  try {
    const response: SignUpResponse = await api.post('/users/create', {
      email,
      password,
    })
    if (response.status === 200) {
      return response.data
    }
  } catch (e) {
    if (isAxiosError(e) && e.response) {
      throw new Error(e.response.data.details)
    }
  }
}
