import React from 'react'
import { Todo } from '../../redux/reducer'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import DoneIcon from '@mui/icons-material/Done'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../../redux/actions'

const SingleTodo = (todo: Todo) => {
  const { name, complete, id } = todo

  const dispatch = useDispatch()

  const handleCompleteClick = (currentId: string) => {
    dispatch(changeStatus(currentId))
  }

  return (<div>
    <Box sx={
      { 'display': 'flex', 'alignItems': 'center', 'width': '100%' }
    }>
      <Tooltip title="Click to change status" placement="top-start" arrow>
        <Typography
          variant="subtitle2"
          gutterBottom
          onClick={() => handleCompleteClick(id)}
          sx={{
            'width': '100%',
            'background': complete ? '#dedede' : '#fdd835',
            'padding': '0.5rem',
            'borderRadius': '1rem',
            'display': 'flex',
            'justifyContent': 'space-between',
            'alignItems': 'center',
          }}
        >
        {name}
        <div>
          <Button>
            <Tooltip
              title={complete ? 'Completed' : 'Incompleted'}
              placement="top" arrow
            >
              <DeleteIcon color='secondary' />
            </Tooltip>
          </Button>
          <Button>
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
          </Button>
        </div>
        </Typography>
      </Tooltip>
    </Box>
  </div>)
}

export default SingleTodo
