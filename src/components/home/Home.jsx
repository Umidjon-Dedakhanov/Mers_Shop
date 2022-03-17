import React from "react";
import { HeaderOrder } from "./headerOrder/HeaderOrder";
import { Navbar } from "./../navbar/Navbar";
import { MyCarousel } from "./carousel/Carousel";
import { Selects } from "./selects/Selects";
import { AllMachineParts } from "./machineParts/AllMachineParts";
import { PopularProducts } from './popularProduct/PopularProducts';
import { System } from "./sytem/System";


export const Home = () => {


  return (
    <div style={{marginBottom:'3rem'}}>
      <HeaderOrder />
      <Navbar />
      <MyCarousel/>
      <Selects/>
      <AllMachineParts/>
      <PopularProducts/>
      <System />
    </div>
  );
};
