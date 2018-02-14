import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from 'reducers'
import createHistory from 'history/createHashHistory'
import DevTools from '../devTools'

const history = createHistory()
const middleware = routerMiddleware(history)
const enhancer = compose(
  DevTools.instrument(),
)

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(middleware), enhancer)
  return store
}