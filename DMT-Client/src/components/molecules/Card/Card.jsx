import React from 'react'
import {HTag} from "../../atoms/index"
import { useFetch } from '../../../utils/hooks/useFetch'
import style from "./Card.module.css"
export const Card = ({url}) => {
  
    const {loading, error, data} = useFetch(url)

  
    if(error){
        return(
        <>
        {error.message}
        </>)
    }
    if(loading){
        return(
            <HTag  index={2} text={"Loading..."} classname={"h2"}/>
        )
    }
    
    if (data) {
        return (
          <div className={style.card}>
            {data.map((pj) => (
              <div key={pj.id}>
                <HTag index={2} text={pj.name} classname={"h2"} />
                <HTag index={4} text={pj.hp} classname={"h4"} />
                <HTag index={4} text={pj.initiativeModifier} classname={"h4"} />
                <HTag index={4} text={pj.armor_class} classname={"h4"} />
                <HTag index={4} text={pj.level} classname={"h4"} />
                <HTag index={4} text={pj?.alignment} classname={"h4"} />
                <HTag index={4} text={pj.encounterId} classname={"h4"} />
              </div>
            ))}
          </div>
        );
      }
    
      return null; // Return null if there is no data to render
    };