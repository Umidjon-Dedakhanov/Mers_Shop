import React from "react";

import { MyCarousel } from "./carousel/Carousel";
import { Selects } from "./selects/Selects";
import { AllMachineParts } from "./machineParts/AllMachineParts";
import { PopularProducts } from "./popularProduct/PopularProducts";
import { System } from "./sytem/System";
import { FeaturedProducts } from "./featuredProducts/FeaturedProducts";
import { AllProducts } from "./allProducts/AllProducts";
import { Information } from "./information/Information";
import { Route, Routes } from "react-router-dom";
import { BrakeDiscMachineParts } from './machineParts/BrakeDiscMachineParts';
import { BrakeDiscProducts } from './popularProduct/BrakeDiscProducts';

export const Home = () => {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <MyCarousel />
      <Selects />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AllMachineParts />
              <PopularProducts />
            </>
          }
        />
        <Route
          path="/brakeDisc"
          element={
            <>
              <BrakeDiscMachineParts />
              <BrakeDiscProducts />
            </>
          }
        />
      </Routes>

      <System />
      <FeaturedProducts />
      <AllProducts />
      <Information />
    </div>
  );
};
