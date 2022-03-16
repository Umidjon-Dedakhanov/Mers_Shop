import React from "react";
import { HeaderOrder } from "./headerOrder/HeaderOrder";
import { Navbar } from "./../navbar/Navbar";
import { Carousel } from "./carousel/Carousel";

export const Home = () => {
  return (
    <>
      <HeaderOrder />
      <Navbar />
      <Carousel/>
    </>
  );
};
