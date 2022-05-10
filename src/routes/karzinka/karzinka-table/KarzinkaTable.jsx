import React from "react";
import PropTypes from 'prop-types';
import KarzinkaProducts from "../karzinka-products/KarzinkaProducts";
import classes from "./KarzinkaTable.module.css";
import { useSelector } from "react-redux";

const KarzinkaTable = ({checkBox, cart, setDelIds, ids, allSelected}) => {
  const { currency } = useSelector(state => state.currency);
  return (
    <table className={classes.product__table}>
      <thead className={classes.table__head}>
        <tr>
          <th></th>
          <th>Товар</th>
          <th>Цена</th>
          <th>Кол-во</th>
          <th>Стоимость</th>
        </tr>
      </thead>
      <tbody className={classes.table__body}>
        {cart?.map((cartItem, index) => (
          <KarzinkaProducts
            productId={cartItem.product?.id}
            setDelIds={setDelIds}
            ids={ids}
            key={index}
            price={currency === "usd" ? cartItem.product?.cost_usd : cartItem.product?.cost_uzs}
            counters={!checkBox}
            checkBox={checkBox}
            initialAmount={cartItem.quantity}
            img={cartItem.product?.imageUrl}
            title={cartItem.product?.name_en}
            allSelected={allSelected}
          />
        ))}
      </tbody>
    </table>
  );
};

KarzinkaTable.propTypes = {
    checkBox: PropTypes.bool
};

export default KarzinkaTable;