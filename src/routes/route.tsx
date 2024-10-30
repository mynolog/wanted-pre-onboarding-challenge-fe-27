import SignUp from '../pages/signUp/SignUp'

const route = [
  {
    path: '/',
    element: <h1>home</h1>,
  },
  {
    path: '/login',
    element: <h1>login</h1>,
  },
  {
    path: '/create',
    element: <SignUp />,
  },
]
export default route
