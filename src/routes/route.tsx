import PrivateRoute from './private/PrivateRoute'
import PublicRoute from './public/PublicRoute'
import Layout from '../components/layout/Layout'
import Home from '../pages/home/Home'
import EntryPage from '../pages/entryPage/EntryPage'
import SignUp from '../pages/signUp/SignUp'
import Login from '../pages/login/Login'

const route = [
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Layout />
      </PrivateRoute>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
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
    path: '/entry',
    element: (
      <PublicRoute>
        <EntryPage />
      </PublicRoute>
    ),
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
