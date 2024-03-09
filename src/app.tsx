import React from 'react'
import './app.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Main from './components/main'
import Typography from '@mui/material/Typography'

function App() {
  return (
    <Provider store={store}>
      <div className='container'>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            'width': '100%',
            'textAlign': 'center',
          }}
        >
          My Personal Todo List
        </Typography>
        <Main />
      </div>
    </Provider>
  )
}

export default App
