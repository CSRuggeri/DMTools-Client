import React from 'react'
import styles from "./Input.module.css"
export const Input = ({type, placeHolder, classname }) => {
 
  
    return (
    <input type={type || "text"} placeholder={placeHolder} className={styles[classname]} />
  )
}
