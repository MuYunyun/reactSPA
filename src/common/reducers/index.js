import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as todoList from './todoList'
import * as musicList from './music'

const rootReducer = combineReducers({
  router: routerReducer,
  ...todoList,
  ...musicList,
})

export default rootReducer
