import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

import { Search } from "./../../navbar/search/Search";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Carousel.css";

const HOME_HEADER_ENDPOINT = "homeHeaders";

export const MyCarousel = () => {
  const {language} = useSelector((state) => state.lang)
  const { t } = useTranslation();
  const { data } = useFetch(HOME_HEADER_ENDPOINT, null);
  const [currentSlide, setCurrentSlide] = useState(0);
  setTimeout(() => {
    setCurrentSlide(
      data && data.length === currentSlide
        ? currentSlide - data.length
        : currentSlide + 1
    );
  }, 3000);

  const dataMap =
    data &&
    data.map((carousel_item, index) => (
      <div key={index}>
        <div
          style={{ backgroundImage: `url(${carousel_item.imageUrl})` }}
          className="carousel_block"
        >
          <div className="darken"></div>
          {window.innerWidth <= 769 ? <Search /> : null}

          <h1>{language === "uz" ? carousel_item.title_uz : language === "ru" ? carousel_item.title_ru : language === "en" && carousel_item.title_en}</h1>
          <p>{language === "uz" ? carousel_item.description_uz : language === "ru" ? carousel_item.description_ru : language === "en" && carousel_item.description_en}</p>
          <button className="catalog_btn">{t("banner.catalog")}</button>
        </div>
      </div>
    ));
  return (
    <Carousel autoPlay selectedItem={currentSlide}>
      {dataMap}
    </Carousel>
  );
};
