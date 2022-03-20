import React from "react";
import { NavLink } from "react-router-dom";

import style from "./Heading.module.css";

export const Heading = ({ img, title, routePathName }) => {
  return (
    <div style={{ backgroundImage: `url(${img}` }} className={style.body}>
      <h1>{title}</h1>
      <div>
        <NavLink to={"/"}>Home</NavLink>
        <strong>/{routePathName}</strong>
      </div>
    </div>
  );
};
