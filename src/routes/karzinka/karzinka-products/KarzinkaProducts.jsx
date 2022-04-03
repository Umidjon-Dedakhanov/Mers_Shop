import React, { useState } from 'react';
import classes from './KarzinkaProducts.module.css';
import PropTypes from 'prop-types';

const KarzinkaProducts = ({img, title, price, counters, initialAmount, checkBox}) => {
    const [initialProductAmount, setInitialProductAmount] = useState(initialAmount);
    return (
        <tr className={classes.product__item}>
            <td  className={classes.product__cell}>{!checkBox && <div className={classes.cell__check}><input type="checkbox" /></div>}</td>
            <td style={checkBox ? {paddingLeft: "1e0px"} : null} className={classes.product__cell + ' ' + classes.product__block}> <div><img src={img} alt=""/> <p>{title}</p></div> </td>
            <td className={classes.product__cell}><div className={classes.cell__info}>{price}</div></td>
            <td className={classes.product__cell}> <div className={classes.cell__counter}>{counters && <button onClick={() => setInitialProductAmount(prev => prev - 1)}>-</button>} {initialProductAmount} {counters && <button onClick={() => setInitialProductAmount(prev => prev + 1)}>+</button>}</div></td>
            <td className={classes.product__cell}><div className={classes.cell__info}>{price * initialProductAmount}</div></td>
        </tr>
    )
}

KarzinkaProducts.propTypes = {
    img: PropTypes.string || PropTypes.element,
    title: PropTypes.string,
    initialAmount: PropTypes.number,
    counters: PropTypes.bool,
    price: PropTypes.number
};

export default KarzinkaProducts
