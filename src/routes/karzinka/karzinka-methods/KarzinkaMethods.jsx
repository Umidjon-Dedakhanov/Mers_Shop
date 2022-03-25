import React from "react";
import Button from '../../../components/UI/button/Button';
import classes from '../Karzinka.module.css'

const KarzinkaMethods = () => {
  return (
    <div>
      <div className={classes.container__paymentinfo}>
        <h2 className={classes.payment__indicator}>Заказ</h2>
        <div className={classes.payment__details}>
          {" "}
          <p>Промежуточный итог :</p> <b>$203.83</b>{" "}
        </div>
        <div className={classes.payment__details}>
          {" "}
          <p>Промежуточный итог :</p> <b>24</b>{" "}
        </div>
        <div className={classes.payment__seperate}></div>
        <div className={classes.payment__details}>
          {" "}
          <p>Oбщий :</p> <b>$203.83</b>{" "}
        </div>
      </div>
      <Button
        title="Оформить заказ"
        disabled={false}
        loading={false}
        loadingText="Loading..."
      />
    </div>
  );
};

export default KarzinkaMethods;
