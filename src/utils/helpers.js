import React from 'react'
import style from "./Helpers.module.css";

export const SelectNav = ({names}) => {
  return (
    <select className={style.select_css}>
      {names.map(n=><option key={n.id}>{n.name}</option>)}
    </select>
  )
}
