import type { RootState } from '../store/store'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useTitle = () => {
  const email = useSelector((state: RootState) => state.auth?.user?.email)
  let userId = ''
  if (email) {
    userId = email.split('@')[0]
  }
  useEffect(() => {
    if (userId) {
      document.title = `${userId} • 원투 | WanTodo`
    } else {
      document.title = '원투 | WanTodo'
    }
  }, [userId])
  return null
}
