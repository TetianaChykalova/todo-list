import { configureStore, Reducer } from '@reduxjs/toolkit'
import { todosReducer, TodosInitialState } from './reducer'

export const store = configureStore({
  'reducer': {
    'todos': todosReducer as Reducer<TodosInitialState>,
  },
})
