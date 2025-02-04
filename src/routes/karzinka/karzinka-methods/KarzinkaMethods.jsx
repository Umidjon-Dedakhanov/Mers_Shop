import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from '../Karzinka.module.css'

const KarzinkaMethods = ({items, subTotal}) => {
  const { currency } = useSelector(state => state.currency);
  return (
    <div>
      <div className={classes.container__paymentinfo}>
        <h2 className={classes.payment__indicator}>Заказ</h2>
        <div className={classes.payment__details}>
          {" "}
          <p>Промежуточный итог :</p> <b> {currency?.toUpperCase()} {subTotal}</b>{" "}
        </div>
        <div className={classes.payment__details}>
          {" "}
          <p>Кол-во: :</p> <b>{items}</b>{" "}
        </div>
        <div className={classes.payment__seperate}></div>
        <div className={classes.payment__details}>
          {" "}
          <p>Oбщий :</p> <b>{currency?.toUpperCase()} {subTotal}</b>{" "}
        </div>
      </div>
      <Link className={classes.link__submit} to="/karzinka/submission">Оформить заказ</Link>
    </div>
  );
};

export default KarzinkaMethods;
