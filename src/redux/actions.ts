import {
  ADD_TODO,
  CHANGE_STATUS,
  FILTER_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
} from './action-types'

type TodoPayloadAction = {
  name: string,
  id: string,
}
type AddTodoAction = {
  type: typeof ADD_TODO,
  payload: TodoPayloadAction,
}
type ChangeStatusAction = {
  type: typeof CHANGE_STATUS,
  payload: string,
}
type FilterTodosAction = {
  type: typeof FILTER_TODOS,
  payload: string
}
type DeleteTodoAction = {
  type: typeof DELETE_TODO,
  payload: string,
}
type UpdateTodoAction = {
  type: typeof UPDATE_TODO,
  payload: TodoPayloadAction,
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
export const deleteTodo = (deleteId: string): DeleteTodoAction => ({
  'type': DELETE_TODO,
  'payload': deleteId,
})
export const updateTodo = (name: string, id: string): UpdateTodoAction => ({
  'type': UPDATE_TODO,
  'payload': {
    name,
    id,
  },
})

export type {
  AddTodoAction,
  TodoPayloadAction,
  ChangeStatusAction,
  FilterTodosAction,
}
