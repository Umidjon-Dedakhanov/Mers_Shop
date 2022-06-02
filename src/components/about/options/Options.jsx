import React from "react";
import { useTranslation } from "react-i18next";

import { BlockOptions } from "../../../utils/helpers";

import style from './Options.module.css'

export const Options = () => {
  const {t} = useTranslation()
  return (
    <div className={style.body}>
      <h1 className={style.title}>{t("OptionInfo.mainTitle")}</h1>
      <div className={style.mainBlock}>
          <BlockOptions num={23} title={t("OptionInfo.title1")} desc={t("OptionInfo.desc")}/>
          <BlockOptions num={1223} title={t("OptionInfo.title2")} desc={t("OptionInfo.desc")}/>
      </div>
    </div>
  );
};
