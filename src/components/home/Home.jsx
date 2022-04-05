import React from "react";
import { Switch, Route } from "react-router-dom";

import { BrakeDiscMachineParts } from "./machineParts/BrakeDiscMachineParts";
import { FeaturedProducts } from "./featuredProducts/FeaturedProducts";
import { BrakeDiscProducts } from "./popularProduct/BrakeDiscProducts";
import { PopularProducts } from "./popularProduct/PopularProducts";
import { AllMachineParts } from "./machineParts/AllMachineParts";
import FilterNavbar from "./../UI/filter-navbar/FilterNavbar";
import { AllProducts } from "./allProducts/AllProducts";
import { Information } from "./information/Information";
import { MyCarousel } from "./carousel/Carousel";
import { System } from "./sytem/System";

export const Home = () => {
  const filter_items = [
    ["All products", "products", "Lorem 1"],
    ["All products", "products", "Lorem 1"],
    ["All products", "products", "Lorem 1"],
    ["All products", "products", "Lorem 1"],
    ["All products", "products", "Lorem 1"],
    ["All products", "products", "Lorem 1"],
    ["All products", "products", "Lorem 1"],
    ["All products", "products", "Lorem 1"],
    ["All products", "products", "Lorem 1"],
  ];

  return (
    <div style={{ marginBottom: "3rem" }}>
      <MyCarousel />
      {/* <Selects /> */}
      <FilterNavbar filterNavData={filter_items} />

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
