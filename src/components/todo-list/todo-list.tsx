import React, { useEffect } from 'react'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import SingleTodo from '../single-todo/single-todo'
import { Todo } from '../../redux/reducer'
import * as filterValue from '../../variables/_variables'

const TodoList = () => {
  const stateTodos = useSelector((state: RootState) => state.todos)

  const filteredTodos: Todo[] = stateTodos.todos.filter((todo: Todo) => {
    switch (stateTodos.filter) {
      case filterValue.FILTER_ALL: {
        return todo
      }
      case filterValue.FILTER_COMPLETE: {
        return todo.complete
      }
      case filterValue.FILTER_INCOMPLETE: {
        return !todo.complete
      }
      default: {
        return todo
      }
    }
  })

  let renderContent

  if (stateTodos.todos.length === 0) {
    renderContent = <h4>You don&apos;t have any todo yet</h4>
  } else if (filteredTodos.length === 0) {
    renderContent = <h4>Please change the filter to display results</h4>
  } else {
    renderContent = filteredTodos.map(
      (todo: Todo) => (<SingleTodo key={todo.id} {...todo} />),
    )
  }

  useEffect(() => {
    // console.log(filteredTodos)
  }, [filteredTodos])

  return (<div className='list-content'>
    {renderContent}
  </div>)
}

export default TodoList
