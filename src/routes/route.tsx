import PrivateRoute from './private/PrivateRoute'
import PublicRoute from './public/PublicRoute'
import SignUp from '../pages/signUp/SignUp'
import Login from '../pages/login/Login'

const route = [
  {
    path: '/',
    element: (
      <PrivateRoute>
        <h1>home</h1>
      </PrivateRoute>
    ),
    children: [
      {
        path: 'todos',
        element: <h1>getTodos</h1>,
        children: [
          {
            path: ':id',
            element: <h1>getTodosById</h1>,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: (
      <PublicRoute>
        <Login />,
      </PublicRoute>
    ),
  },
  {
    path: '/create',
    element: (
      <PublicRoute>
        <SignUp />,
      </PublicRoute>
    ),
  },
]
export default route
