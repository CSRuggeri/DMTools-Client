import React from 'react'
import { Card } from '../molecules'
import "./Show.css"
export const Show = ({type}) => {
  if(type=== "players"){
    return (
    <div className='show'>
        <Card url={"http://localhost:3000/players"}/>
    </div>
  )
  }
if(type=== "monsters"){
    return (
        <div className='show'>
            <Card url={"http://localhost:3000/monsters"}/>
        </div>
      )
}
}
