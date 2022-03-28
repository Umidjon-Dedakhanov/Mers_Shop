import React from "react";

import style from './Card.module.css'
import { NavLink } from 'react-router-dom';

export const Card = ({ img, sortBy, title, txt, one, two, three, four }) => {
  return (
    <div className={style.body}>
      <div className={style.block + ' ' + style.block1}>
        <img src={img} alt="" />
        <div className={style.info}>
          <h2>{sortBy}</h2>
          <h1>{title}</h1>
          <div className={style.stars}>&#x2606;&#x2606;&#x2606;&#x2606;&#x2606;</div>
          <p>{txt}</p>
          <select>
              <option onClick={() => alert("hello")}>1</option>
              <option onClick={() => alert("hello")}>2</option>
              <option onClick={() => alert("hello")}>3</option>
              <option onClick={() => alert("hello")}>4</option>
              <option onClick={() => alert("hello")}>5</option>
          </select>
        </div>
      </div> 
      <div className={style.block + ' ' + style.block2}>
          <div className={style.pctGroup}>
              <img src={one} alt="" />
              <img src={two} alt="" />
              <img src={three} alt="" />
              <img src={four} alt="" />
          </div>
          <NavLink to={'/karzinka'}>Add to bag</NavLink>
      </div>
    </div>
  );
};
