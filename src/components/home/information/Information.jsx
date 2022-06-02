import React from 'react'

import { InformationCard } from '../../../utils/helpers'
import picture1 from '../../../assets/home/info1.png'
import picture2 from '../../../assets/home/info2.png'
import picture3 from '../../../assets/home/info3.png'
import picture4 from '../../../assets/home/info4.png'

import style from './Information.module.css'
import { useTranslation } from 'react-i18next'

export const Information = () => {
  const {t} = useTranslation()
  return (
    <div className={style.body}>
        <InformationCard img={picture1} title={t("InformationCard.titles.first")} desc={t("InformationCard.desc")}/>
        <InformationCard img={picture2} title={t("InformationCard.titles.second")} desc={t("InformationCard.desc")}/>
        <InformationCard img={picture3} title={t("InformationCard.titles.third")} desc={t("InformationCard.desc")}/>
        <InformationCard img={picture4} title={t("InformationCard.titles.fifth")} desc={t("InformationCard.desc")}/>
    </div>
  )
}
