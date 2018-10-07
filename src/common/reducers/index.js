import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as todoList from './todoList'
import * as musicList from './music'
import { music2List } from '../pages/mock/useMock/redux'

const rootReducer = combineReducers({
  router: routerReducer,
  ...todoList,
  ...musicList,
  music2List,
})

export default rootReducer
