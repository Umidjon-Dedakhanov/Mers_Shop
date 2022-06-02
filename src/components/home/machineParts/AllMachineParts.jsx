import React from "react";

import { MachineParts } from "../../../utils/helpers";

import car_1 from "../../../assets/home/machine_parts1.png";
import car_2 from "../../../assets/home/machine_parts2.png";
import car_3 from "../../../assets/home/machine_parts3.png";
import { useTranslation } from "react-i18next";

import style from "./AllMachineParts.module.css";

export const AllMachineParts = () => {
  const { t } = useTranslation();
  return (
    <div className={style.body}>
      <div className={style.box}>
        <MachineParts
          img={car_1}
          desc={t("allMachinePart.first.desc")}
          title={t("allMachinePart.first.title")}
          orderLink={"/lamps_light"}
          saleNum={t("allMachinePart.first.saleNum")}
          discount={t("allMachinePart.first.discount")}
        />
        <MachineParts
          img={car_2}
          desc={t("allMachinePart.second.desc")}
          title={t("allMachinePart.second.title")}
          orderLink={"/bodyParts"}
          saleNum={t("allMachinePart.second.saleNum")}
          discount={t("allMachinePart.second.discount")}
        />
        <MachineParts
          img={car_3}
          title={t("allMachinePart.third.title")}
          orderLink={"/engineSystem"}
          saleNum={t("allMachinePart.third.saleNum")}
          discount={t("allMachinePart.third.discount")}
        />
      </div>
    </div>
  );
};
