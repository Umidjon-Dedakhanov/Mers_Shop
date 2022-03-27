import React from "react";
import { Switch, Route } from "react-router-dom";

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
      <PopularProducts color="#fff" />
      <FeaturedProducts />
      <Information />
    </div>
  );
};
