import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Helpers.module.css";

export const SelectNav = ({ names }) => {
  //eslint-disable-next-line
  // const [brandId, setBrandId] = useState("");

  return (
    <>
      <select
        className={style.select_css}
        onChange={(e) => {
          // const id = e.target.value.split("**")[0];
          // setBrandId(id);
        }}
      >
        {names?.map((n) => {
          return (
            <option
              value={n.id + "**" + n.name}
              key={n.id}
              onClick={() => alert("hello")}
            >
              {n.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

// home/part

export const MachineParts = ({
  img,
  desc,
  title,
  saleNum,
  discount,
  orderLink,
}) => {
  return (
    <div style={{ backgroundImage: `url(${img})` }} className={style.body}>
      <div className={style.box}>
        <h2>{desc}</h2>
        <h1>{title}</h1>
        <div className={style.sale}>
          <h4>{saleNum}</h4>
          <strong>{discount}</strong>
        </div>
        <NavLink to={orderLink}>Order Now</NavLink>
      </div>
    </div>
  );
};

// home/card

// home/system

export const SystemBigBox = ({ title, link, img }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className={style.SystemBigBox}
    >
      <h1>{title}</h1>
      <NavLink to={link}>
        <button className={style.browse_btn}>Hammasini ko'rish</button>
      </NavLink>
    </div>
  );
};

// home/systemSmallBox

export const SystemSmallBox = ({ img, desc, price }) => {
  return (
    <div className={style.SystemSmallBox}>
      <img src={img} alt="" />
      <h3>{desc}</h3>
      <strong>{price}</strong>
    </div>
  );
};

// products

export const Products = ({ title, desc }) => {
  return (
    <div className={style.title}>
      <h1>{title}</h1>
      <h2>{desc}</h2>
    </div>
  );
};

export const ProductCarousel = ({ desc, price }) => {
  return (
    <div className={style.productCarousel}>
      <h3>{desc}</h3>
      <p>{price}</p>
    </div>
  );
};

// home/information

export const InformationCard = ({ img, title, desc }) => {
  return (
    <div className={style.InformationCard}>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

// footer/links

export const LinksFooter = ({ title, links, phone }) => {
  return (
    <div className={style.LinksFooter}>
      <h1>{title}</h1>
      {links &&
        links.map((l, index) => (
          <NavLink key={index} to={`/${l.split(" ").join("").toLowerCase()}`}>
            {l}
          </NavLink>
        ))}
      {phone &&
        phone.map((ph, index) => (
          <a key={index} href={`tel:${ph}`}>
            {ph}
          </a>
        ))}
    </div>
  );
};

// about/title

export const TitleAbout = ({ title, desc }) => {
  return (
    <div className={style.body_about}>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

// about/skills

export const SkillsAbout = ({ title, num, img, desc, readMore_link = "/" }) => {
  return (
    <div className={style.Skills_about}>
      <h1>{title}</h1>
      <p>{num}</p>
      <img src={img} alt="" />
      <h2>{desc}</h2>
      <NavLink to={readMore_link}>Read More ➡</NavLink>
    </div>
  );
};

// about/options

export const BlockOptions = ({ num, title, desc }) => {
  return (
    <div className={style.BlockOptions}>
      <strong>{num}</strong>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};
