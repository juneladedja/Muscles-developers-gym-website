import { useState } from 'react'

import './App.css'

import { Checkout } from './Checkout'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
   <Checkout/>
     
    </>

  )
}

export default App
