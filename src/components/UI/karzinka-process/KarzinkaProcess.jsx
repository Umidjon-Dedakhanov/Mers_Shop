import React from 'react';
import classes from './KarzinkaProcess.module.css';
import { FiShoppingBag, FiFileText, FiCreditCard, FiArchive } from 'react-icons/fi';

const KarzinkaProcess = ({procCss, activeColor, lineColor}) => {
    return (
        <div className={classes.karzinka__process} style={procCss}>
            <ul className={classes.karzinka__collection}>
                <li style={{color: activeColor}} className={classes.collection__item}>
                    <FiShoppingBag/>
                    <span>Корзина</span>
                </li>
                <div style={lineColor ? {background: lineColor} : {background: "#000"}} className={classes.line}></div>
                <li style={{color: activeColor}} className={classes.collection__item}>
                    <FiFileText/>
                    <span>Разместить заказ</span>
                </li>
                <div style={lineColor ? {background: lineColor} : {background: "#000"}} className={classes.line}></div>

                <li className={classes.collection__item}>
                    <FiCreditCard/>
                    <span>Платить</span>
                </li>
                <div style={lineColor ? {background: lineColor} : {background: "#000"}} className={classes.line}></div>
                <li className={classes.collection__item}>
                    <FiArchive/>
                    <span>Заказ выполнен</span>
                </li>
            </ul>
        </div>
    )
}

export default KarzinkaProcess
