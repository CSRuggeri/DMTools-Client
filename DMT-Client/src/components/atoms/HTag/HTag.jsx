import React from 'react'
import style from "./HTag.module.css"
export const HTag = ({index, text, classname}) => {
 
 if(index === 1){
    return(<h1 className={style[classname]}>{text}</h1>)
 }
 if(index === 2){
    return(<h2 className={style[classname]}>{text}</h2>)
 }
 if(index === 3){
    return(<h3 className={style[classname]}>{text}</h3>)
 }
 if(index === 4){
    return(<h4 className={style[classname]}>{text}</h4>)
 }
 if(index === 5){
    return(<h5 className={style[classname]}>{text}</h5>)
 }
 if(index === 6){
    return(<h6 className={style[classname]}>{text}</h6>)
 }
 }
