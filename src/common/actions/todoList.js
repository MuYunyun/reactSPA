import { createAction } from 'redux-actions'

export const addTodo = createAction('ADD_TODO')
export const setVisibility = createAction('SET_VISIBILITY')
export const toggleTodo = createAction('TOGGLE_TODO')
export const delTodo = createAction('DEL_TODO')