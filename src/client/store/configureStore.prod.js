import createHistory from 'history/createHashHistory'
import rootReducer from 'reducers'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'

const history = createHistory()
const middleware = routerMiddleware(history)

export default function configureStore() {
  return createStore(rootReducer, applyMiddleware(middleware))
}