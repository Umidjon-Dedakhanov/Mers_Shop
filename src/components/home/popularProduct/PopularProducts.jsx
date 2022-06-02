import React from "react";
import { Products } from "../../../utils/helpers";
import CardProduct from "../../../utils/CardProduct";
import style from "./PopularProducts.module.css";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const PRODUCT_MAINS_ENDPOINT = "productMains";


export const PopularProducts = ({ color = "#f8f8f8" }) => {
  const {language} = useSelector((state) => state.lang)
  const { categories } = useSelector((state) => state.categories);
  const { data } = useFetch(PRODUCT_MAINS_ENDPOINT, null);
  const { t } = useTranslation();
  return (
    <div style={{ backgroundColor: color }} className={style.body}>
      <Products
        title={t("popularProducts.title")}
        desc={t("popularProducts.desc")}
      />
      <div className={style.scroll}>
        {categories?.length === 0
          ? data.map((product, index) => (
              <CardProduct
                key={index}
                id={product.id}
                index={index}
                desc={language === "uz" ? product.name_uz : language === "ru" ? product.name_ru : language === "en" && product.name_en}
                img={product.imageUrl}
                price={`$${product.cost_usd}` || `${product.cost_usd} sum`}
                path={`product/${product?.id}`}
                product={product}
              />
            ))
          : categories?.productMain?.map((product, index) => (
              <CardProduct
                key={index}
                id={product.id}
                index={index}
                desc={language === "uz" ? product.name_uz : language === "ru" ? product.name_ru : language === "en" && product.name_en}
                img={product.imageUrl}
                price={`$${product.cost_usd}` || `${product.cost_usd} sum`}
                path={`product/${product?.id}`}
                product={product}
              />
            ))}
      </div>
    </div>
  );
};
