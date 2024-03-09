import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import PostAddIcon from '@mui/icons-material/PostAdd'
import { useDispatch } from 'react-redux'
import { addTodo } from '../redux/actions'
import nextId from 'react-id-generator'
import { MAX_TODO_CHARS } from '../variables/_variables'

const AddTodoInput = () => {
  const [todoText, setTodoText] = React.useState<string>('')
  const [inputError, setInputError] = React.useState<boolean>(false)

  const dispatch = useDispatch()

  const handleEventInput = (text: string) => {
    setTodoText(text)
  }

  React.useEffect(() => {
    todoText.trim().length >= MAX_TODO_CHARS
      ? setInputError(true)
      : setInputError(false)
  }, [todoText])

  const handleAddTodoClick = (name: string) => {
    const id = nextId('todo-id-')
    dispatch(addTodo(name, id))
    setTodoText('')
  }

  const handleEventKeyPress =
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault()
        const id = nextId('todo-id-')
        const target = event.target as HTMLInputElement
        const name = target.value.trim()
        if (name.length > 0 && name.length < MAX_TODO_CHARS) {
          dispatch(addTodo(name, id))
          setTodoText('')
        }
      }
    }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { 'm': 1, 'width': '100%' },
      }}
      noValidate
      autoComplete="off"
    >
        <Box sx={
          { 'display': 'flex', 'alignItems': 'baseline', 'width': '100%' }
        }>
          <TextField
            color="success"
            // focused
            error={inputError}
            value={todoText}
            id='filled-error-helper-text'
            label='Add New Todo'
            placeholder='Your todo'
            helperText=
              {`The number of characters should not exceed ${MAX_TODO_CHARS}`}
            variant='filled'
            size='small'
            sx={{ 'flex': '1' }}
            onChange={(event) => handleEventInput(event.target.value)}
            InputProps={{
              'onKeyDown':
                (event: React.KeyboardEvent<HTMLInputElement>) => {
                  handleEventKeyPress(event)
                },
            }}
          />
          <Button
            variant='contained'
            color='success'
            startIcon={<PostAddIcon />}
            disabled={todoText.trim().length === 0 || inputError}
            onClick={() => handleAddTodoClick(todoText.trim())}
          >
            Add
          </Button>
        </Box>
    </Box>
  )
}

export default AddTodoInput
