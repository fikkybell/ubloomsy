import { useState } from 'react'
import Dashboard from './pages/dashboard'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Dashboard/>
   </div>
  )
}

export default App
