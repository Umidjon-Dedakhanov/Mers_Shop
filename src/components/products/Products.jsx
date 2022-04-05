import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import { Selects } from "./../home/selects/Selects";
import { BrakeDiscMachineParts } from "./../home/machineParts/BrakeDiscMachineParts";
import { BrakeDiscProducts } from "./../home/popularProduct/BrakeDiscProducts";
import { PopularProducts } from "./../home/popularProduct/PopularProducts";

import img from "../../assets/home/main1.webp";
import mainProduct from "../../assets/products/1.png";
import one from "../../assets/products/1_1.png";
import two from "../../assets/products/1_2.png";
import three from "../../assets/products/1_3.png";
import four from "../../assets/products/1_4.png";

import { Heading } from "./../UI/Heading";
import { FeaturedProducts } from "./../home/featuredProducts/FeaturedProducts";
import { Information } from "./../home/information/Information";

import style from "./Products.module.css";
import { Card } from "./card/Card";

export const Products = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.body}>
      <Heading title={"ABOUT US"} routePathName="About" img={img} />
      <Selects
        to1="/product/all"
        to2="/product/brakeDiscs"
        to3="/product/brakePads"
        to4="/product/brakeDrums"
        to5="/product/hotProducts"
        to6="/product/popularProducts"
        to7="/product/brakeDisc"
      />
      <div className={style.box}>
        <Switch>
          <Route
            path="/product/1"
            component={() => (
              <Card
                sortBy={"Car side tools"}
                title="Customized Front Carbon Brake Disc"
                txt={"Hyundai Motor and its affiliate Kia Motors will provide lifetime warranties to owners of vehicles equipped with Theta 2 gasoline direct injection (GDi) engines, the companies said Friday. ar owners here and in the United States, who have experienced engine failure, will be able to receive various cash compensation options and lifetime warranties."}
                img={mainProduct}
                one={one}
                two={two}
                three={three}
                four={four}
              />
            )}
          />

          <Route
            path="/"
            render={() => {
              <>
                <PopularProducts color="#fff" />
                <FeaturedProducts />
              </>;
            }}
          />
          <Route
            path="all"
            render={() => {
              <>
                <PopularProducts color="#fff" />
                <FeaturedProducts />
              </>;
            }}
          />
          <Route
            path="all"
            render={() => {
              <>
                <PopularProducts color="#fff" />
                <FeaturedProducts />
              </>;
            }}
          />
          <Route
            path="brakeDisc"
            render={() => {
              <>
                <BrakeDiscProducts color="#fff" />
                <FeaturedProducts />
              </>;
            }}
          />
          <Route
            path="brakePads"
            render={() => {
              <>
                <BrakeDiscProducts color="#fff" />
                <BrakeDiscMachineParts />
              </>;
            }}
          />

          <Route
            path="brakeDrums"
            render={() => {
              <>
                <PopularProducts color="#fff" />
                <FeaturedProducts />
              </>;
            }}
          />
          <Route
            path="hotProducts"
            render={() => {
              <>
                <BrakeDiscProducts color="#fff" />
                <FeaturedProducts />
              </>;
            }}
          />

          <Route
            path="popularProducts"
            render={() => {
              <>
                <PopularProducts color="#fff" />
                <FeaturedProducts />
              </>;
            }}
          />
        </Switch>
      </div>
      {!pathname.includes("/product/1") && (
        <PopularProducts color="#fff" />
      )}

      <FeaturedProducts />
      <Information />
    </div>
  );
};
