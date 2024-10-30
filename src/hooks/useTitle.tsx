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
      document.title = `${userId} • Todowing`
    } else {
      document.title = 'Todowing'
    }
  }, [userId])
  return null
}
