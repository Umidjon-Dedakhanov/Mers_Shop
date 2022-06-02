import React from "react";

import { SystemBigBox } from "../../../utils/helpers";
import engine from "../../../assets/home/engine1.png";
import system from "../../../assets/home/system1.png";

import style from "./System.module.css";
import { SystemSmallBox } from "./../../../utils/helpers";
import { useTranslation } from "react-i18next";

export const System = () => {
  const {t } = useTranslation();
  return (
    <div className={style.body}>
      <SystemBigBox img={engine} title={t("System.title")} link={"engine"} />
      <SystemSmallBox
        img={system}
        desc={t("System.desc")}
        price={"$44.28"}
      />
      <SystemSmallBox
        img={system}
        desc={t("System.desc")}
        price={"$44.28"}
      />
      <SystemSmallBox
        img={system}
        desc={t("System.desc")}
        price={"$44.28"}
      />
      <SystemSmallBox
        img={system}
        desc={t("System.desc")}
        price={"$44.28"}
      />
      <SystemBigBox img={engine} title={t("System.title2")} link={"engine"} />
    </div>
  );
};
