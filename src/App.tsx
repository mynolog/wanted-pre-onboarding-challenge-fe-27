import { Outlet } from 'react-router-dom'
import Router from './routes'

const App = () => {
  return (
    <>
      <Router />
      <Outlet />
    </>
  )
}
export default App
