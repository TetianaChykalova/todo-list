import { ADD_TODO, CHANGE_STATUS, FILTER_TODOS } from './action-types'

type AddTodoPayloadAction = {
  name: string,
  id: string,
}
type AddTodoAction = {
  type: typeof ADD_TODO,
  payload: AddTodoPayloadAction,
}
type ChangeStatusAction = {
  type: typeof CHANGE_STATUS,
  payload: string,
}
type FilterTodosAction = {
  type: typeof FILTER_TODOS,
  payload: string
}

export const addTodo = (name: string, id: string): AddTodoAction => ({
  'type': ADD_TODO,
  'payload': {
    name,
    id,
  },
})
export const changeStatus = (id: string): ChangeStatusAction => ({
  'type': CHANGE_STATUS,
  'payload': id,
})
export const filterTodos = (filterText: string): FilterTodosAction => ({
  'type': FILTER_TODOS,
  'payload': filterText,
})

export type {
  AddTodoAction,
  AddTodoPayloadAction,
  ChangeStatusAction,
  FilterTodosAction,
}
