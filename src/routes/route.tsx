import SignUp from '../pages/signUp/SignUp'

const route = [
  {
    path: '/',
    element: <div>home</div>,
  },
  {
    path: '/login',
    element: <div>login</div>,
  },
  {
    path: '/create',
    element: <SignUp />,
  },
]
export default route
