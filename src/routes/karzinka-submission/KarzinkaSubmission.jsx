import React from 'react';
import classes from './KarzinkaSubmission.module.css';

import { FiMapPin, FiInfo, FiCreditCard } from 'react-icons/fi';
import masterCard from '../../assets/karzinka/MasterCard.png';
import paypal from '../../assets/karzinka/PayPal.png';
import visa from '../../assets/karzinka/visa.png';

import KarzinkaNavbar from '../karzinka/karzinka-navbar/KarzinkaNavbar';
import KarzinkaProcess from '../../components/UI/karzinka-process/KarzinkaProcess';
import KarzinkaFooter from '../karzinka/karzinka-footer/KarzinkaFooter';
import KarzinkaTable from '../karzinka/karzinka-table/KarzinkaTable';
import KarzinkaMethods from '../karzinka/karzinka-methods/KarzinkaMethods'
import KarzinkaForm from './karzinka-form/KarzinkaForm';
import { Link } from 'react-router-dom';

const KarzinkaSubmission = () => {
    return (
        <div>
            <KarzinkaNavbar title="ewbfejwkb" JSXcomponent={<KarzinkaProcess activeColor="#fff" lineColor="#fff" />}/>
            <div className={classes.submission__container}>
                <div className={classes.container__form }>
                    <h1 className={classes.form__title}> <FiMapPin/> Пожалуйста, подтвердите свой адрес доставки <FiInfo/> </h1>
                    <div className={classes.line}></div>
                    <KarzinkaForm/>
                    <div className={classes.payment__select}>
                    <h1 className={classes.form__title}> <FiCreditCard/> {" "}Способы оплаты </h1>
                    <div className={classes.line}></div>
                    <div className={classes.payment__providers}>
                        <div className={classes.provider}>
                            <input defaultChecked type="radio" name="payment_provider" />
                            <img src={paypal} alt="" />
                            <p>PayPal</p>
                        </div>
                        <div className={classes.provider}>
                            <input type="radio" name="payment_provider" />
                            <img src={masterCard} alt="" />
                            <img src={visa} alt="" />
                            <p>Кредитные или дебетовые карты</p>
                        </div>
                    </div>
                </div>
                    <KarzinkaTable checkBox={true}/>
                    
                </div>
                <div className={classes.payment__methodadd}>
                    <KarzinkaMethods/>
                    <div className={classes.payment__agreement}>
                        <input type="checkbox"  />
                        <p>Я принимаю <Link to="/"> Условия и положения</Link> а также <Link to="/">политика конфиденциальности</Link></p>
                    </div>
                </div>
                
                
            </div>
            
            <div className={classes.total}>
                <h2>Пакет 1 (6 шт.)</h2>
                <p>доставить из CN | Время отправки: <span>10-20 рабочих дней</span></p>
            </div>
            
            <KarzinkaFooter/>
        </div>
    )
}

export default KarzinkaSubmission
