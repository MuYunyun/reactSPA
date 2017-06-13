import { combineReducers } from 'redux'
import * as todoList from './todoList'

const rootReducer = combineReducers({
  ...todoList,
})

export default rootReducer