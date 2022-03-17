import React from "react";

import { CardProduct } from "../../../utils/helpers";
import card1 from "../../../assets/home/card1.png";

import style from "./PopularProducts.module.css";
// import ProductList, { Pagination } from './Paginator';

export const PopularProducts = () => {
  return (
    <div className={style.body}>
      <div className={style.title}>
        <h1>Popular products</h1>
        <h2>
          Sooner or later your car’s engine accessory drive belts, timing belts,
          and coolant hoses will dry out and crack.
        </h2>
        {/* <ProductList/> */}
        
      </div>
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
