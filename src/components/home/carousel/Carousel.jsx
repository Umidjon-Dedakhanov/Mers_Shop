import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import main from "../../../assets/home/main.webp";
import main1 from "../../../assets/home/main1.webp";
import main2 from "../../../assets/home/main2.webp";
import main3 from "../../../assets/home/main3.png";
import { Search } from "./../../navbar/search/Search";

import "./Carousel.css";

export const MyCarousel = () => {
  return (
    <Carousel showThumbs={false} autoplay>
      <div>
        <div
          style={{ backgroundImage: `url(${main})` }}
          className="carousel_block"
        >
          <div className={"darken"}></div>

          {window.innerWidth <= 769 ? <Search /> : null}

          <h1>All existing and newly added spare parts can be found</h1>
          <p>
            The automotive industry is strong, and drivers will always need a
            trustworthy partner for their automotive needs.
          </p>
          <button>Catalogue</button>
        </div>
      </div>
      <div>
        <div
          style={{ backgroundImage: `url(${main1})` }}
          className="carousel_block"
        >
          <div className={"darken"}></div>
          <h1>All existing and newly added spare parts can be found</h1>
          <p>
            The automotive industry is strong, and drivers will always need a
            trustworthy partner for their automotive needs.
          </p>
          <button>Catalogue</button>
        </div>
      </div>
      <div>
        <div
          style={{ backgroundImage: `url(${main2})` }}
          className="carousel_block"
        >
          <div className={"darken"}></div>

          <h1>All existing and newly added spare parts can be found</h1>
          <p>
            The automotive industry is strong, and drivers will always need a
            trustworthy partner for their automotive needs.
          </p>
          <button>Catalogue</button>
        </div>
      </div>
      <div>
        <div
          style={{ backgroundImage: `url(${main3})` }}
          className="carousel_block"
        >
          <div className={"darken"}>ytutyu</div>

          <h1>All existing and newly added spare parts can be found</h1>
          <p>
            The automotive industry is strong, and drivers will always need a
            trustworthy partner for their automotive needs.
          </p>
          <button>Catalogue</button>
        </div>
      </div>
    </Carousel>
  );
};
