import React from "react";

import img from "../../assets/home/main.png";
import picture from "../../assets/about/picture.png";

import { Information } from "./../home/information/Information";
import { CompanyInfo } from "./companyInfo/CompanyInfo";
import { Options } from "./options/Options";
import { Heading } from "./../UI/Heading";
import { Skills } from "./skills/Skills";
import { SomeText } from "./someText/SomeText";
import { Pictures } from "./pictures/Pictures";

export const About = () => {
  return (
    <div>
      <Heading title={"ABOUT US"} routePathName="About" img={img} />
      <CompanyInfo />
      <Skills />
      <Options />
      <img
        style={{ width: "95%", margin: "80px 2.5% 0" }}
        src={picture}
        alt=""
      />
      <SomeText />
      <Pictures />
      <Information />
    </div>
  );
};
