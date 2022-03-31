import React from "react";
import PropTypes from 'prop-types';
import productImage from "../../../assets/karzinka/product.png";
import KarzinkaProducts from "../karzinka-products/KarzinkaProducts";
import classes from "./KarzinkaTable.module.css";

const KarzinkaTable = ({checkBox}) => {
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
        {new Array(3).fill().map((_, index) => (
          <KarzinkaProducts
            key={index}
            price={12.99}
            counters={!checkBox}
            checkBox={checkBox}
            initialAmount={1}
            img={productImage}
            title={`Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`}
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