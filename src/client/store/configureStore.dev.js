// import { routerMiddleware } from 'react-router-redux'
// import createHistory from 'history/createHashHistory'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from 'reducers'
import thunk from 'redux-thunk'
import DevTools from '../devTools'
import logger from '../middleware/logger'

// const history = createHistory()
// const middleware = routerMiddleware(history)

const enhancer = compose(
  // applyMiddleware(thunk, middleware),
  applyMiddleware(thunk, logger),
  DevTools.instrument(),
)

export default function configureStore(initialstate) {
  const store = createStore(rootReducer, initialstate, enhancer)
  return store
}
