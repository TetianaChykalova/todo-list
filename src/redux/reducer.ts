// import { UnknownAction } from 'redux'
import { ADD_TODO, CHANGE_STATUS, FILTER_TODOS } from './action-types'
import { AddTodoAction, ChangeStatusAction, FilterTodosAction } from './actions'

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
  action: ActionTypes,
) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        'todos': [
          ...state.todos,
          {
            'name': action.payload.name,
            'complete': false,
            'id': action.payload.id,
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
export type { TodosInitialState }
