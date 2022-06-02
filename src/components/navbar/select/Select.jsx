import React, { useState } from "react";
import style from "./Select.module.css";
import i18n from "../../../i18n";
import { useDispatch, useSelector } from "react-redux";

export const Select = () => {
  const {language} = useSelector((state) => state.lang)
  console.log("SDWEDfwsWSD",language);
  const dispatch = useDispatch()
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);

  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
    dispatch({ type: "LANG_CHANGED", payload: event.target.value });
  };

 

  return (
    <select
      className={style.select_css}
      name="lang"
      value={lang}
      onChange={handleChange}
    >
      <option value="uz">UZ</option>
      <option value="ru">RU</option>
      <option value="en">EN</option>
    </select>
  );
};
