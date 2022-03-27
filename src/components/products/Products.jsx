import React from "react";
import { Routes, Route } from "react-router-dom";

import { Selects } from "./../home/selects/Selects";
import { BrakeDiscMachineParts } from "./../home/machineParts/BrakeDiscMachineParts";
import { BrakeDiscProducts } from "./../home/popularProduct/BrakeDiscProducts";
import { PopularProducts } from "./../home/popularProduct/PopularProducts";

import img from "../../assets/home/main1.png";

import { Heading } from "./../UI/Heading";
import { FeaturedProducts } from "./../home/featuredProducts/FeaturedProducts";
import { Information } from "./../home/information/Information";

import style from "./Products.module.css";

export const Products = () => {
  return (
    <div className={style.body}>
      <Heading title={"ABOUT US"} routePathName="About" img={img} />
      <Selects />
      <div className={style.box}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PopularProducts color="#fff"/>
                <FeaturedProducts />
              </>
            }
          />
          <Route
            path="all"
            element={
              <>
                <PopularProducts color="#fff"/>
                <FeaturedProducts />
              </>
            }
          />
          <Route
            path="all"
            element={
              <>
                <PopularProducts color="#fff"/>
                <FeaturedProducts />
              </>
            }
          />
          <Route
            path="brakeDisc"
            element={
              <>
                <BrakeDiscProducts color="#fff"/>
                <FeaturedProducts />
              </>
            }
          />
          <Route
            path="brakePads"
            element={
              <>
                <BrakeDiscProducts color="#fff"/>
                <BrakeDiscMachineParts />
              </>
            }
          />

          <Route
            path="brakeDrums"
            element={
              <>
                <PopularProducts color="#fff"/>
                <FeaturedProducts />
              </>
            }
          />
          <Route
            path="hotProducts"
            element={
              <>
                <BrakeDiscProducts color="#fff"/>
                <FeaturedProducts />
              </>
            }
          />

          <Route
            path="popularProducts"
            element={
              <>
                <PopularProducts color="#fff" />
                <FeaturedProducts />
              </>
            }
          />
        </Routes>
      </div>
      <PopularProducts color="#fff"/>
      <FeaturedProducts />
      <Information />
    </div>
  );
};
