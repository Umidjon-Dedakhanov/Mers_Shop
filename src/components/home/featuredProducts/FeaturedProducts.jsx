import React from "react";

import { Products } from "../../../utils/helpers";
import carousel from "../../../assets/home/featuredProducts.png";
import picture from "../../../assets/home/featuredProducts1.png";
import picture2 from "../../../assets/home/featuredProducts2.png";

import style from "./FeaturedProducts.module.css";

export const FeaturedProducts = () => {
  if(window.innerWidth < 500) {
   console.log(window.innerWidth);
  } else {
    let update_width  = window.innerWidth-100;
    let update_height = Math.round(update_width/4.4);
    console.log(update_height);

  }

  return (
    <div className={style.body}>
      <Products
        title={"Featured products"}
        desc={
          "Sooner or later your car’s engine accessory drive belts, timing belts, and coolant hoses will dry out and crack."
        }
      />
      
      <div
        className={style.carousel}
        style={{ backgroundImage: `url(${carousel})` }}
      >
        <div className={style.darkBox}>
          <h3>Customized Front Carbon Brake Disc</h3>
          <strong>$122.56</strong>
        </div>
      </div>
      
      <div className={style.picture_group}>
        <img src={picture} alt="" />
        <img src={picture2} alt="" />
        <img src={picture} alt="" />
        <img src={picture2} alt="" />
        <img src={picture} alt="" />
      </div>
    </div>
  );
};
