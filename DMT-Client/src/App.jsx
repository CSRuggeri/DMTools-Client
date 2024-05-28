import { useState } from 'react'
import { Route, Routes, Link, } from "react-router-dom";
import './App.css'
import { NavBar } from './components/molecules'
import { Show } from './components/view';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <NavBar classname={"navbar"}/>
   
      <Routes>
        <Route path="/players" element={<Show type={"players"}/>}/>
        <Route path="/monsters" element={<Show type={"monsters"} />}/>
      </Routes>
    
    </>
  )
}

export default App
