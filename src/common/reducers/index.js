import { combineReducers } from 'redux'
import * as todoList from './todoList'
import * as musicList from './music'

const rootReducer = combineReducers({
  ...todoList,
  ...musicList,
})

export default rootReducer