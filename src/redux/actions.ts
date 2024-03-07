import { ADD_TODO, CHANGE_STATUS, FILTER_TODOS } from './action-types'

interface AddTodoPayloadAction {
  name: string,
  id: string,
}
interface AddTodoAction {
  type: typeof ADD_TODO,
  payload: AddTodoPayloadAction,
}
interface ChangeStatusAction {
  type: typeof CHANGE_STATUS,
  payload: string,
}
interface FilterTodosAction {
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
export const filterTodos = (text: string): FilterTodosAction => ({
  'type': FILTER_TODOS,
  'payload': text,
})

export type { AddTodoAction, ChangeStatusAction, FilterTodosAction }
