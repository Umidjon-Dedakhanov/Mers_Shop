import React from "react";

import { CardProduct, Products } from "../../../utils/helpers";

import style from "./PopularProducts.module.css";
import useFetch from '../../../hooks/useFetch';
import { useRouteMatch } from "react-router";
const PRODUCT_MAINS_ENDPOINT = "productCategories";

export const PopularProducts = ({color='#f8f8f8'}) => {
  const { data } = useFetch(PRODUCT_MAINS_ENDPOINT, null);
  const {url} = useRouteMatch();
  return (
    <div style={{backgroundColor: color}} className={style.body}>
        <Products title={'Popular products'} desc={'Sooner or later your car’s engine accessory drive belts, timing belts, and coolant hoses will dry out and crack.'}/>
      <div className={style.scroll}>
        {
          data && data.map((product, index) => 
            <CardProduct
                key={index}
                desc={product.productMain[0].name_en}
                img={product.imageUrl}
                price={`$${product.productMain[0].cost_usd}` || `${product.productMain[0].cost_usd} sum`}
                path={`${url}/${product.id}`}
            />  
          )
        }
      </div>
    </div>
  );
};
