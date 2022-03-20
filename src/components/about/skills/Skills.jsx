import React from 'react'

import one from '../../../assets/about/skills1.png'
import two from '../../../assets/about/skills2.png'
import three from '../../../assets/about/skills3.png'

import { SkillsAbout } from './../../../utils/helpers';

import style from './Skills.module.css'

export const Skills = () => {
  return (
    <div className={style.body}>
        <SkillsAbout title={'Slick range of labels'} num={'01'} img={one} desc={'As well as our roster of ASOS Brands, we’ve also got a slick range of labels you won’t find anywhere else.'} readMore_link={'/about/skills/1'}/>
        <hr width="2" size="700" color='gray'/>
        <SkillsAbout title={'Slick range of labels'} num={'02'} img={two} desc={'As well as our roster of ASOS Brands, we’ve also got a slick range of labels you won’t find anywhere else.'} readMore_link={'/about/skills/2'}/>
        <hr className={style.hr2} width="2" size="700" color='gray'/>
        <SkillsAbout title={'Slick range of labels'} num={'03'} img={three} desc={'As well as our roster of ASOS Brands, we’ve also got a slick range of labels you won’t find anywhere else.'} readMore_link={'/about/skills/3'}/>
    </div>
  )
}
