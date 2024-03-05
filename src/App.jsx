import { useState } from 'react'

import './App.css'
import { RegisterForm } from './RegisterForm'
import {LoginForm} from './LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <LoginForm/>
     <RegisterForm/>
      
    </>
  )
}

export default App
