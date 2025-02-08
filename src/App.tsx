import { useState } from 'react'
import { AppRoutes } from 'routes'
import { BrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App