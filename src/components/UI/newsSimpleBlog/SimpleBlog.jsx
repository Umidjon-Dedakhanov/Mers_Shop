import React from "react";
import { NavLink } from "react-router-dom";

import style from "./SimpleBlog.module.css";

export const SimpleBlogBlock = ({
  img1,
  title1,
  date1,
  desc1,
  img2,
  title2,
  date2,
  desc2,
  dN= ''
}) => {
  return (
    <div className={style.block}>
      <div className={style.parent}>
        <div className={style.imgParent}>
          <NavLink to="blog" className={style.link}>
            <img src={img1} alt="Blog 1" />
          </NavLink>
        </div>
        <div>
          <NavLink to="blog" className={style.link}>
            <h2 className={style.title}>
              <b>{title1}</b>
            </h2>
            <p className={style.date}>{date1}</p>
            <p className={style.text}>{desc1}</p>
          </NavLink>
        </div>
      </div>
      <div className={style.parent} style={{display: dN}}>
        <div className={style.imgParent}>
          <NavLink to="blog" className={style.link}>
            <img src={img2} alt="Blog 1" />
          </NavLink>
        </div>
        <div>
          <NavLink to="blog" className={style.link}>
            <h2 className={style.title}>
              <b>{title2}</b>
            </h2>
            <p className={style.date}>{date2}</p>
            <p className={style.text}>{desc2}</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
