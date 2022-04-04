import React from "react";
import { NavLink } from 'react-router-dom';

import style from './Card.module.css'

export const Card = ({ img, sortBy, title, txt, one, two, three, four }) => {
  return (
    <div className={style.body}>
      <div className={style.block + ' ' + style.block1}>
        <img src={img} alt="" />
        <div className={style.pctGroup + ' ' + style.sm_pct}>
              <img src={one} alt="" />
              <img src={two} alt="" />
              <img src={three} alt="" />
              <img src={four} alt="" />
          </div>
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
          <NavLink to={'/karzinka'} className={style.btn + ' ' + style.sm_btn}>Add to bag</NavLink>

        </div>
      </div> 
      <div className={style.block + ' ' + style.block2}>
          <div className={style.pctGroup + ' ' + style.lg_pct}>
              <img src={one} alt="" />
              <img src={two} alt="" />
              <img src={three} alt="" />
              <img src={four} alt="" />
          </div>
          <NavLink to={'/karzinka'} className={style.btn  + ' ' + style.lg_btn}>Add to bag</NavLink>
      </div>
    </div>
  );
};
