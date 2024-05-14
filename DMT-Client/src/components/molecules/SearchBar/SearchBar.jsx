import React from "react";
import { Input, Button } from "../../atoms";
import styles from "./SearchBar.module.css";

export const SearchBar = ({ classname }) => {
  return (
    <div className={styles[classname]}>
      <Input classname={"first"} type={"text"} placeHolder={"Buscar"} />
      <Button type={"submit"} tag={"buscar"} classname={"primary-btn"} />
    </div>
  );
};
