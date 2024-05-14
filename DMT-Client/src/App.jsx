import { useState } from 'react'

import './App.css'
import { NavBar } from './components/molecules'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <NavBar classname={"navbar"}/>
    </>
  )
}

export default App
