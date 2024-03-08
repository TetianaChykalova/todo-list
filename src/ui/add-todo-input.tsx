import * as React from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import PostAddIcon from '@mui/icons-material/PostAdd'

const AddTodoInput = () => {
  const [todoText, setTodoText] = React.useState<string>('')
  const [inputError, setInputError] = React.useState<boolean>(false)

  const handleEventInput = (text: string) => {
    setTodoText(text)
  }

  React.useEffect(() => {
    todoText.length >= 50 ? setInputError(true) : setInputError(false)
  }, [todoText])

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
            error={inputError}
            value={todoText}
            id='filled-error-helper-text'
            label='Add New Todo'
            placeholder='Your todo'
            helperText="The number of characters shouldn't exceed 50"
            variant='filled'
            size='small'
            sx={{
              'flex': '1',
            }}
            onChange={(event) => handleEventInput(event.target.value)}
          />
          <Button
            variant='contained'
            color='success'
            startIcon={<PostAddIcon />}
            disabled={todoText.length === 0 || inputError}
          >
            Add
          </Button>
        </Box>
    </Box>
  )
}

export default AddTodoInput
