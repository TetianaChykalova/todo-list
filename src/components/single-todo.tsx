import React from 'react'
import { Todo } from '../redux/reducer'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ToggleOffIcon from '@mui/icons-material/ToggleOff'
import ToggleOnIcon from '@mui/icons-material/ToggleOn'
import { useDispatch } from 'react-redux'
import { changeStatus } from '../redux/actions'

const SingleTodo = (prop: Todo) => {
  const { name, complete, id } = prop

  const dispatch = useDispatch()

  const handleCompleteClick = (currentId: string) => {
    dispatch(changeStatus(currentId))
  }

  return (<div>
      <Box sx={
            { 'display': 'flex', 'alignItems': 'center', 'width': '100%' }
          }>
      <Tooltip title="Click to change status" placement="bottom">
        <Typography
          variant="subtitle2"
          gutterBottom
          onClick={() => handleCompleteClick(id)}
        >
        {name}
        </Typography>
      </Tooltip>
      <Button>
        <Tooltip
          title={complete ? 'Complete' : 'Incomplete'}
          placement="bottom"
        >
          {
            complete
              ? <ToggleOnIcon />
              : <ToggleOffIcon color="success" />
          }
        </Tooltip>
      </Button>
    </Box>
  </div>)
}

export default SingleTodo
