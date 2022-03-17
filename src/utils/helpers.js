import React from "react";
import { NavLink } from "react-router-dom";

import korzina from "../assets/home/korzina.png";
import favorite from "../assets/home/favorite.png";

import style from "./Helpers.module.css";

export const SelectNav = ({ names }) => {
  return (
    <select className={style.select_css}>
      {names.map((n) => (
        <option key={n.id}>{n.name}</option>
      ))}
    </select>
  );
};

// home/part

export const MachineParts = ({
  img,
  desc,
  title,
  saleNum,
  discount,
  orderLink,
}) => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className={style.body}>
      <div className={style.box}>
        <h2>{desc}</h2>
        <h1>{title}</h1>
        <div className={style.sale}>
          <h4>{saleNum}</h4>
          <strong>{discount}</strong>
        </div>
        <NavLink to={orderLink}>Order Now</NavLink>
      </div>
    </div>
  );
};

// home/card

export const CardProduct = ({ img, startNum = 2, desc, price }) => {
  console.log(startNum.toPrecision);
  return (
    <div className={style.CardProduct}>
      <div className={style.btnGroup}>
        <NavLink to={"/"}>
          {" "}
          <img src={korzina} alt="" />
        </NavLink>
        <NavLink to={"/"}>
          <img src={favorite} alt="" />
        </NavLink>
      </div>
      <div className={style.cardImg}>
        <img src={img} alt="" />
      </div>
      <div className={style.stars}>
        &#x2605; &#x2605; &#x2605; &#x2605; &#x2606;
      </div>
      <div>
        <h1>{desc}</h1>
      </div>
      <div>
        <h2>{price}</h2>
      </div>
    </div>
  );
};

// home/system

export const SystemBigBox = ({ title, link, img }) => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className={style.SystemBigBox}>
      <h1>{title}</h1>
      <NavLink to={link}>
        <button>Browse all</button>
      </NavLink>
    </div>
  );
};

// home/systemSmallBox


export const SystemSmallBox = ({img, desc, price}) => {
  return (
    <div className={style.SystemSmallBox}>
      <img src={img} alt=''/>
      <h3>{desc}</h3>
      <strong>{price}</strong>
    </div>
  )
}
