import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Router from './routes'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
        <Outlet />
      </Provider>
    </>
  )
}
export default App
