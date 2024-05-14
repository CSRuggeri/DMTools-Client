import React from 'react'
import styles from "./NavBar.module.css"
import { Input } from '../../atoms'
import { Button } from '../../atoms'
import {useNavigate} from "react-router-dom"
import { SearchBar } from '../index'


export const NavBar = ({classname}) => {

    const navigate = useNavigate()


  return (
   <nav className={styles[classname]}>

<SearchBar classname={"search"} />

<br />
<Button onClick={()=>navigate("/Home")} tag={"Home"} classname={"secondary-btn"}/>
   </nav>
  )
}
