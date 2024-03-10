import React from 'react'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../../redux/actions'
import { Todo } from '../../redux/reducer'
import SingleTodoActions from './single-todo-actions'

import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const SingleTodo = (todo: Todo) => {
  const { name, complete, id } = todo
  const dispatch = useDispatch()

  const handleCompleteClick = (currentId: string) => {
    dispatch(changeStatus(currentId))
  }

  return (<div>
    <Box sx={
      {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'width': '100%',
        'borderRadius': '1rem',
        'background': complete ? '#dedede' : '#fdd835',
      }
    }>
      <Tooltip title="Click to change status" placement="top-start" arrow>
        <Typography
          variant="subtitle2"
          gutterBottom
          onClick={() => handleCompleteClick(id)}
          sx={{
            'width': '80%',
            'textAlign': 'left',
            'padding': '0.5rem',
          }}
        >
        {name}
        </Typography>
      </Tooltip>
      <SingleTodoActions {...todo} />
    </Box>
  </div>)
}

export default SingleTodo
