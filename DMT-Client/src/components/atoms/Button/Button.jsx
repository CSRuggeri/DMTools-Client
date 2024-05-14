import styles from "./Button.module.css"

export const Button = ({type, onclick, classname, tag }) => {

  
  return (
    <button type={type} onClick={()=>{onclick}} className={styles[classname]}>{tag}</button>
  )
}
