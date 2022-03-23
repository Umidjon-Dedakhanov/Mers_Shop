import React from "react";

import { CardProduct, Products } from "../../../utils/helpers";
import card1 from "../../../assets/home/card1.png";

import style from "./PopularProducts.module.css";

export const BrakeDiscProducts = () => {
  return (
    <div className={style.body}>
        <Products title={'Popular products'} desc={'Sooner or later your car’s engine accessory drive belts, timing belts, and coolant hoses will dry out and crack.'}/>
      <div className={style.scroll}>
        <CardProduct
          desc={"Customized Front Carbon Brake Disc"}
          img={card1}
          price={"$122.56"}
        />
        <CardProduct
          desc={"Customized Front Carbon Brake Disc"}
          img={card1}
          price={"$122.56"}
        />
        <CardProduct
          desc={"Customized Front Carbon Brake Disc"}
          img={card1}
          price={"$122.56"}
        />
        <CardProduct
          desc={"Customized Front Carbon Brake Disc"}
          img={card1}
          price={"$122.56"}
        />
        <CardProduct
          desc={"Customized Front Carbon Brake Disc"}
          img={card1}
          price={"$122.56"}
        />
        <CardProduct
          desc={"Customized Front Carbon Brake Disc"}
          img={card1}
          price={"$122.56"}
        />
      </div>
    </div>
  );
};
