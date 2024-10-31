import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LoginUser {
  email: string
  token: string
}

export interface AuthState {
  user: LoginUser | null
  isLoggedIn: boolean
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAction(
      state,
      action: PayloadAction<{ user: LoginUser; isLoggedIn: boolean }>,
    ) {
      state.user = action.payload.user
      state.isLoggedIn = action.payload.isLoggedIn
    },
    logoutAction() {
      return { ...initialState }
    },
  },
})

export const { loginAction, logoutAction } = authSlice.actions
export default authSlice.reducer
