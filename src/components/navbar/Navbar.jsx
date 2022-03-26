import React, { useState } from "react";

import logo from "../../assets/home/logo.png";
import person from "../../assets/home/person.png";

import { Search } from "./search/Search";
import { Select } from "./select/Select";
import { Switch } from "./switch/Switch";

import style from "./Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [scroll, setScroll] = useState();
  const { pathname } = useLocation();

  window.addEventListener("scroll", () => {
    if (window.scrollY < 40) {
      setScroll(style.tr);
    } else {
      setScroll(style.mt);
    }
  });

  return (
    <nav className={style.navbar + " " + scroll} style={pathname.includes("account") ? {background: "#333"} : null}>
      <div className={style.navbar_container + " " + style.container}>
        <input type="checkbox" name="" id="" />
        <div className={style.hamburger_lines}>
          <span className={style.line + " " + style.line1}></span>
          <span className={style.line + " " + style.line2}></span>
          <span className={style.line + " " + style.line3}></span>
        </div>
        <ul className={style.menu_items}>
          <li>
            <NavLink exact className={style.item__inactive} activeClassName={style.item__active} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink exact className={style.item__inactive} activeClassName={style.item__active}  to="/about">About Us</NavLink>
            
          </li>
          <li>
            <NavLink exact className={style.item__inactive} activeClassName={style.item__active}  to="/product">Products</NavLink>
          </li>
          <li>
            <NavLink exact className={style.item__inactive} activeClassName={style.item__active}  to="/new">News</NavLink>
          </li>
          <li>
            <NavLink exact className={style.item__inactive} activeClassName={style.item__active}  to="/contact">Contact Us</NavLink>
          </li>
          <li  className={style.forSearch}>
            <Search />
          </li>
          <li>
            <Select />
            <img src={person} alt="" />
          </li>
          <li>
            <Switch />
          </li>
        </ul>
        <img src={logo} alt="" className={style.logo} />
      </div>
    </nav>
  );
};
