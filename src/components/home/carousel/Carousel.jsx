import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import { Search } from "./../../navbar/search/Search";
import useFetch from "../../../hooks/useFetch";
const HOME_HEADER_ENDPOINT = "homeHeaders";

export const MyCarousel = () => {
  const { data } = useFetch(HOME_HEADER_ENDPOINT, null);
  return (
    <Carousel showThumbs={false} autoplay>
      {data &&
        data.map((carousel_item, index) => (
          <div key={index}>
            <div
              style={{ backgroundImage: `url(${carousel_item.imageUrl})` }}
              className="carousel_block"
            >
              {window.innerWidth <= 769 ? <Search /> : null}

              <h1>{carousel_item.title_en}</h1>
              <p>{carousel_item.description_en}</p>
              <button className="catalog_btn">Kataloglar</button>
            </div>
          </div>
        ))}
    </Carousel>
  );
};
