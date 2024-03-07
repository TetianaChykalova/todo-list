import React from 'react'
import './app.css'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div></div>
    </Provider>
  )
}

export default App