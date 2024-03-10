import React from 'react'
import { Todo } from '../../redux/reducer'
import { useDispatch } from 'react-redux'
import { updateTodo } from '../../redux/actions'
import { MAX_TODO_CHARS } from '../../variables/_variables'

import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import EditNoteIcon from '@mui/icons-material/EditNote'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import BorderColorIcon from '@mui/icons-material/BorderColor'

const style = {
  'position': 'absolute' as const,
  'top': '50%',
  'left': '50%',
  'transform': 'translate(-50%, -50%)',
  'width': 600,
  'bgcolor': 'background.paper',
  'border': '2px solid #000',
  'boxShadow': 24,
  'p': 4,
  'textAlign': 'center',
}

const SingleTodoEdit = (todo: Todo) => {
  const { name, id } = todo
  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false)
  const [todoTextUpdate, setTodoTextUpdate] = React.useState(name)
  const [inputError, setInputError] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  React.useEffect(() => {
    todoTextUpdate.trim().length >= MAX_TODO_CHARS
      ? setInputError(true)
      : setInputError(false)
  }, [todoTextUpdate])

  const handleEventInput = (text: string) => {
    setTodoTextUpdate(text)
  }

  const handleUpdateTodoClick = (nameUpdated: string) => {
    dispatch(updateTodo(nameUpdated, id))
    handleClose()
  }

  return (<>
    <IconButton size="small" onClick={handleOpen}>
      <Tooltip
        title='Edit'
        placement="top" arrow
      >
        <EditNoteIcon color='secondary' />
      </Tooltip>
    </IconButton>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-todo-modal-title"
      aria-describedby="edit-todo-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="edit-todo-modal-title"
          variant="h6" component="h2"
          sx={{ 'mb': 2 }}>
          Update this todo
        </Typography>
        <Box sx={
          { 'display': 'flex', 'alignItems': 'baseline', 'width': '100%' }
        }>
          <TextField
              color="success"
              value={todoTextUpdate}
              id="edit-todo-modal-description"
              placeholder='Edit your todo'
              helperText=
                {`The number of characters should not exceed ${MAX_TODO_CHARS}`}
              variant='filled'
              size='small'
              sx={{ 'flex': '1' }}
              onChange={(event) => handleEventInput(event.target.value)}
            />
            <IconButton
              size="small"
              onClick={() => handleUpdateTodoClick(todoTextUpdate)}
              disabled={todoTextUpdate.trim().length === 0 || inputError}
            >
              <Tooltip
                title='Update'
                placement="top" arrow
              >
                <BorderColorIcon color='secondary' />
              </Tooltip>
            </IconButton>
        </Box>
      </Box>
    </Modal>
  </>)
}

export default SingleTodoEdit
