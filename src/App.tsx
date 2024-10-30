import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Router from './routes'
import { useTitle as Title } from './hooks/useTitle'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Router />
        <Title />
        <Outlet />
      </Provider>
    </>
  )
}
export default App
