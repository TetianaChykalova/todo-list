import { ADD_TODO, CHANGE_STATUS, FILTER_TODOS } from './action-types'
import {
  AddTodoAction,
  AddTodoPayloadAction,
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
  todos: Todo[],
  filter: string,
}

const initialState: TodosInitialState = {
  'todos': [],
  'filter': 'ALL',
}

type ActionTypes = AddTodoAction | ChangeStatusAction | FilterTodosAction

function todosReducer(
  state = initialState,
  action: ActionTypes | UnknownAction,
) {
  switch (action.type) {
    case ADD_TODO: {
      const { name, id } = action.payload as AddTodoPayloadAction
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
      }
    }
    default: {
      return state
    }
  }
}

export { todosReducer }
export type { TodosInitialState, ActionTypes }
