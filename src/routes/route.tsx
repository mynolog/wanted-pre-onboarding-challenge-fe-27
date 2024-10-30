import SignUp from '../pages/signUp/SignUp'
import Login from '../pages/login/Login'

const route = [
  {
    path: '/',
    element: <h1>home</h1>,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/create',
    element: <SignUp />,
  },
]
export default route
