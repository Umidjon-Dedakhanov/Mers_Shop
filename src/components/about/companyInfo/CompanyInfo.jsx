import React from "react";
import { useTranslation } from "react-i18next";

import { TitleAbout } from "../../../utils/helpers";

import style from "./CompanyInfo.module.css";

export const CompanyInfo = () => {
  const {t} = useTranslation()
  return (
    <div className={style.body}>
      <h1 className={style.title}>
        {t("CompanyInfo.mainTitle")}
      </h1>
      <div className={style.mainBlock}>
        <TitleAbout
          title={t("CompanyInfo.title")}
          desc={
            t("CompanyInfo.desc")
          }
        />
        <TitleAbout
          title={t("CompanyInfo.title")}
          desc={
            t("CompanyInfo.desc")
          }
        />
        <TitleAbout
          title={t("CompanyInfo.title")}
          desc={
            t("CompanyInfo.desc")
          }
        />
        <TitleAbout
          title={t("CompanyInfo.title")}
          desc={
            t("CompanyInfo.desc")
          }
        />
      </div>
    </div>
  );
};
