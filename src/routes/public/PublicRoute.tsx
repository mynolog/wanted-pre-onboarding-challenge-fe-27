import type { ReactNode } from 'react'
import type { RootState } from '../../store/store'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

interface PublicRouteProps {
  children: ReactNode
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth)

  return !isLoggedIn ? children : <Navigate to={'/'} replace />
}

export default PublicRoute
