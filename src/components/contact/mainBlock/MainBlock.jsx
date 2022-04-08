import React from "react";
import { Title } from "../../UI/mainBlock/Title";
import message from "../../../assets/contact/message.png";
import location from "../../../assets/contact/location.png";
import clock from "../../../assets/contact/clock.png";
import YandexMap from "./map/Map";

import style from "./MainBlock.module.css";

export const MainBlock = () => {
  const data = [
    {
      id: 1,
      title: "Call Us",
      desc: "The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...",
      img: message,
      info: "+998 71 289-99-99",
    },
    {
      id: 2,
      title: "Visit Us",
      desc: "The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...",
      img: location,
      info: "9, Ziyolilar str., M.Ulugbek district, 100170 Tashkent, Uzbekistan.",
    },
    {
      id: 3,
      title: "Visit Us",
      desc: "The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...",
      img: clock,
      info: "Mon - Fri: 8:00am to 5:00pm  Sut - Sun: Close",
    },
  ];

  const dataMap = data.map((d, index) => (
    <Title
      key={index}
      title={d.title}
      desc={d.desc}
      img={d.img}
      info={d.info}
    />
  ));
  return (
    <div className={style.body}>
      <h1 className={style.title}>Get in touch</h1>
      <br />
      <div className={style.main}>
        <h3>Send a message</h3>
        <p>
          Her parents had moved into the house, belonging to her Scottish
          grandparents, the Earl and Countess of Strathmore, only a few weeks
          before her birth.
        </p>
        <div className={style.inp_gr}>
          <input placeholder="Name" />
          <input placeholder="Email Address" />
          <input placeholder="Surname" />
          <input placeholder="Phone number" />
        </div>
        <input className={style.message_inp} placeholder="Message" />
        <button className={style.btn}>Send</button>
      </div>
      <hr className={style.hr2} width="1" size="550" color="gray" />
      <div className={style.info}>{dataMap}</div>
      <YandexMap />
    </div>
  );
};
