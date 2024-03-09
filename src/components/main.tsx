import React from 'react'
import AddTodoInput from '../ui/add-todo-input'
import FilterSelect from '../ui/filter-select'
import TodoList from './todo-list/todo-list'

const Main = () => {
  return (<div>
    <AddTodoInput />
    <FilterSelect />
    <TodoList />
  </div>)
}

export default Main
