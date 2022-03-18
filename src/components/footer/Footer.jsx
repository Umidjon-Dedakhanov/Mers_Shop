import React from 'react'
import { NavLink } from 'react-router-dom'

import logo from '../../assets/home/logo.png'
import facebook from '../../assets/footer/facebook.png'
import twitter from '../../assets/footer/twitter.png'
import instagram from '../../assets/footer/instagram.png'
import { LinksFooter } from '../../utils/helpers'

import style from './Footer.module.css'

export const Footer = () => {
    const services = [
        {id:1, path: '/automateService', name: 'Automate service'},
        {id:2, path: '/computerSoftware', name: 'Computer software'},
        {id:3, path: '/humanRecognation', name: 'Human recognation'},
        {id:4, path: '/operations', name: 'Operations'},
    ]
    const about = [
        {id:1, path: '/ourStory', name: 'Our Story'},
        {id:2, path: '/benefits', name: 'Benefits'},
        {id:3, path: '/team', name: 'Team'},
        {id:4, path: '/careers', name: 'Careers'},
    ]
    const contact = [
        {id:1, path: '/adress', name: '9, Ziyolilar str., M.Ulugbek district, 100170 Tashkent, Uzbekistan'},
        {id:2, path: 'tel:+998 71 289-99-99', name: '+998 71 289-99-99'},
        {id:3, path: 'tel:+998 71 269-00-58', name: '+998 71 269-00-58 (Fax)'},
        {id:4, path: 'https://inha.uz/ru/glavnaya/', name: 'info@inha.uz'},
    ]
  return (
    <div className={style.body}>
        <div className={style.info}>
            <img src={logo} alt="" />
            <h3>With over 50 years in the auto repair industry, we have a network of successful franchisees.</h3>
        </div>
        <LinksFooter links={services} title={'Services'} />
        <LinksFooter links={about} title={'About'} />
        <LinksFooter links={contact} title={'Contact'} />
        <div className={style.end}>
            <div>
                <h1>Terms & Conditions</h1>
                <h1>Privacy Policy</h1>
            </div>
            <div>
                <NavLink to={'facebook'}><img src={facebook} alt=''/></NavLink>
                <NavLink to={'twitter'}><img src={twitter} alt=''/></NavLink>
                <NavLink to={'instagram'}><img src={instagram} alt=''/></NavLink>
            </div>
        </div>
    </div>
  )
}
