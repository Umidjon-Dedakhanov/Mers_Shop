import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import main from "../../../assets/home/main.png";
import main1 from "../../../assets/home/main1.png";
import main2 from "../../../assets/home/main2.png";
import main3 from "../../../assets/home/main3.png";

import "./Carousel.css";

export const MyCarousel = () => {
  return (
    <Carousel showThumbs={false} autoplay>
      <div>
        <div
          style={{ backgroundImage: `url(${main})` }}
          className="carousel_block"
        >
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
