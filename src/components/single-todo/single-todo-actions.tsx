import React from 'react'
import { Todo } from '../../redux/reducer'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../../redux/actions'
import SingleTodoEdit from './single-todo-edit'

import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import DoneIcon from '@mui/icons-material/Done'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import DeleteIcon from '@mui/icons-material/Delete'

const SingleTodoActions = (todo: Todo) => {
  const { complete, id } = todo
  const dispatch = useDispatch()

  const handleDeleteClick = (currentId: string) => {
    dispatch(deleteTodo(currentId))
  }

  return (<div>
    { !complete && <SingleTodoEdit {...todo} /> }
    <IconButton
      size="small"
      onClick={() => handleDeleteClick(id)}
    >
      <Tooltip
        title='Delete'
        placement="top" arrow
      >
        <DeleteIcon color='secondary' />
      </Tooltip>
    </IconButton>
    <IconButton size="small">
      <Tooltip
        title={complete ? 'Completed' : 'Incompleted'}
        placement="top" arrow
      >
        {
          complete
            ? <DoneIcon color='success' />
            : <AccessTimeFilledIcon color='warning' />
        }
      </Tooltip>
    </IconButton>
  </div>)
}

export default SingleTodoActions
