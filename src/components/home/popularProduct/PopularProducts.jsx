import React, { useRef, useState } from "react";
import { useRouteMatch } from "react-router";

import { CardProduct, Products, sideScroll } from "../../../utils/helpers";
import useFetch from "../../../hooks/useFetch";

import vectorR from "../../../assets/home/vectorR.png";
import vectorL from "../../../assets/home/vectorL.png";

import style from "./PopularProducts.module.css";

const PRODUCT_MAINS_ENDPOINT = "productCategories";

export const PopularProducts = ({ color = "#f8f8f8" }) => {
  const { data } = useFetch(PRODUCT_MAINS_ENDPOINT, null);
  const { url } = useRouteMatch();
  const [button, setButton] = useState(style.disable);
  const [buttonR, setButtonR] = useState(style.popularProducts__button);
  const contentWrapper = useRef(null);
  return (
    <div style={{ backgroundColor: color }} className={style.body}>
      <div className={style.popularProducts__mainBlock}>
        <Products
          title={"Popular products"}
          desc={
            "Sooner or later your car’s engine accessory drive belts, timing belts, and coolant hoses will dry out and crack."
          }
        />
        <div className={style.popularProducts__buttonWrapper}>
          <button
            className={button}
            onClick={() => {
              if (contentWrapper.current.scrollLeft === 0) {
                setButton(style.disable);
                setButtonR(style.popularProducts__button);
              } else {
                setButton(style.popularProducts__button);
                sideScroll(contentWrapper.current, 25, 100, -10);
                setButtonR(style.popularProducts__button);
              }
            }}
          >
            <img src={vectorL} alt="" />
          </button>
          <button
            className={buttonR}
            onClick={() => {
              const current =
                contentWrapper.current.scrollLeft +
                contentWrapper.current.clientWidth;
              if (contentWrapper.current.scrollWidth <= current) {
                setButton(style.popularProducts__button);
                setButtonR(style.disable);
              } else {
                sideScroll(contentWrapper.current, 25, 100, 10);
                setButton(style.popularProducts__button);
                setButtonR(style.popularProducts__button);
              }
            }}
          >
            <img src={vectorR} alt="" />
          </button>
        </div>
      </div>
      <div className={style.scroll} ref={contentWrapper}>
        {data &&
          data.map((product, index) => (
            <CardProduct
              key={index}
              desc={product.productMain[0].name_en}
              img={product.imageUrl}
              price={
                `$${product.productMain[0].cost_usd}` ||
                `${product.productMain[0].cost_usd} sum`
              }
              path={`${url}/${product.id}`}
            />
          ))}
      </div>
    </div>
  );
};
