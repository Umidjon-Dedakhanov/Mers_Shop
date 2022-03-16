import React from "react";
import style from "./Select.module.css";

export const Select = () => {
  return (
    <select className={style.select_css}>
      <option>Uz</option>
      <option>Ru</option>
      <option>En</option>
    </select>
  );
};
