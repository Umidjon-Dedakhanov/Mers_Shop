import React from "react";

import img1 from "../../../assets/news/new1Img.png";
import img2 from "../../../assets/news/new2Img.png";
import img3 from "../../../assets/news/new3Img.png";
import img4 from "../../../assets/news/new4Img.png";
import img5 from "../../../assets/news/new5Img.png";
import img6 from "../../../assets/news/new6Img.png";
import style from "./SimpleBlog.module.css";
import { SimpleBlogBlock } from "./../../UI/newsSimpleBlog/SimpleBlog";

export const SimpleBlog = () => {
  const data = [
    {
      id: 1,
      img1: img1,
      title1: "More than 440,000 new cases were recorded in the US on Monday.",
      date1: "12.12.2021",
      desc1:
        "Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead?",
      img2: img4,
      title2: "More than 440,000 new cases were recorded in the US on Monday.",
      date2: "12.12.2021",
      desc2:
        "Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead?",
    },
    {
      id: 2,
      img1: img2,
      title1: "More than 440,000 new cases were recorded in the US on Monday.",
      date1: "12.12.2021",
      desc1:
        "Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead?",
      img2: img5,
      title2: "More than 440,000 new cases were recorded in the US on Monday.",
      date2: "12.12.2021",
      desc2:
        "Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead?",
    },
    {
      id: 3,
      img1: img3,
      title1: "More than 440,000 new cases were recorded in the US on Monday.",
      date1: "12.12.2021",
      desc1:
        "Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead?",
      img2: img6,
      title2: "More than 440,000 new cases were recorded in the US on Monday.",
      date2: "12.12.2021",
      desc2:
        "Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead?",
    },
  ];

  const dataMap = data.map((d) => (
    <SimpleBlogBlock key={d.id}
      img1={d.img1}
      title1={d.title1}
      date1={d.date1}
      desc1={d.desc1}
      img2={d.img2}
      title2={d.title2}
      date2={d.date2}
      desc2={d.desc2}
    />
  ));
  return <div className={style.body}>{dataMap}</div>;
};
