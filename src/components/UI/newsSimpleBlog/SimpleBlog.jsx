import React from "react";
import { NavLink } from "react-router-dom";

import style from "./SimpleBlog.module.css";

export const SimpleBlogBlock = ({
  arr,
  dN= ''
}) => {
  return (
    <div className={style.block}>
      {
        arr && arr.map((news_item, index) => 
          <div key={index} className={style.parent}>
            <div className={style.imgParent}>
              <NavLink to={`/new/${news_item.id}`} className={style.link}>
                <img src={news_item.imageUrl} alt="Blog 1" />
              </NavLink>
            </div>
            <div>
              <NavLink to={`/new/${news_item.id}`} className={style.link}>
                <h2 className={style.title}>
                  <b>{news_item.title_uz}</b>
                </h2>
                <p className={style.date}>{news_item.updated?.split("T")[0].replace(/-/g, ".")}</p>
                <p className={style.text}>{news_item.description_uz}</p>
              </NavLink>
            </div>
          </div>  
        )
      }
    </div>
  );
};
