import React from "react";

import style from "./News.module.css";
import { Imgs } from "./imgs/Imgs";
import { SimpleBlog } from "./simpleBlog/SimpleBlog";
import { Popular } from "./popular/Popular";
import { Block } from "./block/Block";
import { EndBlock } from "./endBlock/EndBlock";

export const News = () => {
  return (
    <>
      <div className={style.body}>
        <div className={style.textBlock}>
          <div className={style.main}>
            <h1>Hong Kong news website to shut after police raid</h1>
            <hr color="#152a59" />
          </div>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.infoMain}>
          <h2>12.12.2021</h2>
          <p>
            The US and several European countries have reported their highest
            daily rises in Covid cases since the pandemic began, as the Omicron
            variant spreads.
          </p>
        </div>
      </div>
      <Imgs />
      <SimpleBlog />
      <Popular />
      <Block />
      <EndBlock />
    </>
  );
};
