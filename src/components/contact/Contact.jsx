import React from "react";

import main from "../../assets/home/main.webp";

import { Heading } from "../UI/Heading";
import { MainBlock } from "./mainBlock/MainBlock";

export const Contact = () => {
  return (
    <div>
      <Heading img={main} routePathName="Contact" title={"Contact Us"} />
      <MainBlock />
    </div>
  );
};
