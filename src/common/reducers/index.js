import { combineReducers } from 'redux'
import * as todoList from './todoList'
import * as musicList from './music'
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  router: routerReducer,
  ...todoList,
  ...musicList,
})

export default rootReducer