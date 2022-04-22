import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/home/logo.png";
import person from "../../assets/home/person.png";
import { Search } from "./search/Search";
import { Select } from "./select/Select";
import { Switch } from "./switch/Switch";
import style from "./Navbar.module.css";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [scroll, setScroll] = useState();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  window.addEventListener("scroll", () => {
    if (window.scrollY < 40) {
      setScroll(style.tr);
    } else {
      setScroll(style.mt);
    }
  });

  const { isAuthenticated } = useSelector((state) => state.authReducer);

  return (
    <nav
      className={style.navbar + " " + scroll}
      style={pathname.includes("account") ? { background: "#333" } : null}
    >
      <div className={style.navbar_container + " " + style.container}>
        <input type="checkbox" name="" id="" />
        <div className={style.hamburger_lines}>
          <span className={style.line + " " + style.line1}></span>
          <span className={style.line + " " + style.line2}></span>
          <span className={style.line + " " + style.line3}></span>
        </div>
        <div className={style.navbar__select}>
          <Select />
          {isAuthenticated ? (
            <img src={person} alt="" />
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
        <ul className={style.menu_items}>
          <li>
            <NavLink
              exact
              className={style.item__inactive}
              activeClassName={style.item__active}
              to="/"
            >
              {t("navbar.home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.item__inactive}
              activeClassName={style.item__active}
              to="/about"
            >
              {t("navbar.about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.item__inactive}
              activeClassName={style.item__active}
              to="/product"
            >
              {t("navbar.product")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.item__inactive}
              activeClassName={style.item__active}
              to="/news"
            >
              {t("navbar.news")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.item__inactive}
              activeClassName={style.item__active}
              to="/contact"
            >
              {t("navbar.contact")}
            </NavLink>
          </li>
          {window.innerWidth <= 769 ? null : (
            <li className={style.forSearch}>
              <Search />
            </li>
          )}
          <li className={style.navbar__selectLG}>
            <Select />
            {isAuthenticated ? (
              <NavLink exact to={"/login/sign-in"}>
                <img src={person} alt="" />
              </NavLink>
            ) : (
              <NavLink exact to={"/login/sign-in"}>
                {t("navbar.login")}
              </NavLink>
            )}
          </li>
          <li>
            <Switch />
          </li>
        </ul>
        <NavLink to={"/"} className={style.navbar__logo_block}>
          <img src={logo} alt="" className={style.logo} />
        </NavLink>
      </div>
    </nav>
  );
};
