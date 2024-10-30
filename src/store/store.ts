import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth/authSlice'

const loadAuthState = () => {
  try {
    const localAuthState = localStorage.getItem('auth')
    return localAuthState
      ? JSON.parse(localAuthState)
      : { user: null, isLoggedIn: false }
  } catch (error) {
    console.error('로컬 스토리지 연동 오류:', error)
    return { user: null, isLoggedIn: false }
  }
}

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState: {
    auth: loadAuthState(),
  },
})

store.subscribe(() => {
  const state = store.getState()
  localStorage.setItem(
    'auth',
    JSON.stringify({
      user: state.auth.user,
      isLoggedIn: state.auth.isLoggedIn,
    }),
  )
})

export type RootState = ReturnType<typeof store.getState>
export default store
