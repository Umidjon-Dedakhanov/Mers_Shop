import React from "react";
import { Switch, Route } from "react-router-dom";

import { MyCarousel } from "./carousel/Carousel";
import { Selects } from "./selects/Selects";
import { AllMachineParts } from "./machineParts/AllMachineParts";
import { PopularProducts } from "./popularProduct/PopularProducts";
import { System } from "./sytem/System";
import { FeaturedProducts } from "./featuredProducts/FeaturedProducts";
import { AllProducts } from "./allProducts/AllProducts";
import { Information } from "./information/Information";
import { BrakeDiscMachineParts } from './machineParts/BrakeDiscMachineParts';
import { BrakeDiscProducts } from './popularProduct/BrakeDiscProducts';

export const Home = () => {
  return (
    <div style={{ marginBottom: "3rem" }}>
      <MyCarousel />
      <Selects />
      <Switch>
        <Route
          path="/all"
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
      </Switch>

      <System />
      <FeaturedProducts />
      <AllProducts />
      <Information />
    </div>
  );
};
