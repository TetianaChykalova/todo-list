import {
  ADD_TODO,
  CHANGE_STATUS,
  FILTER_TODOS,
  DELETE_TODO,
  UPDATE_TODO,
} from './action-types'
import { FILTER_ALL } from '../variables/_variables'
import {
  AddTodoAction,
  TodoPayloadAction,
  ChangeStatusAction,
  FilterTodosAction,
} from './actions'
import { UnknownAction } from 'redux'

type Todo = {
  name: string
  complete: boolean
  id: string
};

interface TodosInitialState {
  'todos': Todo[],
  'filter': string,
}

const initialState: TodosInitialState = {
  'todos': [],
  'filter': FILTER_ALL,
}

type ActionTypes =
  AddTodoAction | ChangeStatusAction | FilterTodosAction

function todosReducer(
  state = initialState,
  action: ActionTypes | UnknownAction,
) {
  switch (action.type) {
    case ADD_TODO: {
      const { name, id } = action.payload as TodoPayloadAction
      return {
        ...state,
        'todos': [
          ...state.todos,
          {
            name,
            'complete': false,
            id,
          },
        ],
      }
    }
    case CHANGE_STATUS: {
      return {
        ...state,
        'todos': state.todos.map((singleTodo: Todo) => {
          return (
            singleTodo.id === action.payload
              ? { ...singleTodo, 'complete': !singleTodo.complete }
              : singleTodo
          )
        }),
      }
    }
    case FILTER_TODOS: {
      return {
        ...state,
        'filter': action.payload as string,
      }
    }
    case DELETE_TODO: {
      return {
        ...state,
        'todos': state.todos.filter(
          (singleTodo: Todo) => {
            return singleTodo.id !== action.payload
          },
        ),
      }
    }
    case UPDATE_TODO: {
      const { name, id } = action.payload as TodoPayloadAction
      return {
        ...state,
        'todos': state.todos.map((singleTodo: Todo) => {
          return (
            singleTodo.id === id
              ? { ...singleTodo, name }
              : singleTodo
          )
        }),
      }
    }
    default: {
      return state
    }
  }
}

export { todosReducer }
export type { TodosInitialState, ActionTypes, Todo }
