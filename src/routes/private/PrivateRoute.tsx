import type { ReactNode } from 'react'
import type { RootState } from '../../store/store'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

interface PrivateRouteProps {
  children: ReactNode
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth)

  return isLoggedIn ? children : <Navigate to={'/entry'} replace />
}

export default PrivateRoute
