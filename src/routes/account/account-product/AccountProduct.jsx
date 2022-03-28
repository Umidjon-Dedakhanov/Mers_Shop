import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FiTrash2, FiShoppingBag } from 'react-icons/fi';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './AccountProduct.module.css';

const AccountProduct = ({data, tableHeaders}) => {
    return (
        <div className={classes.account__product}>
            <table className={classes.account__table}>
                <thead>
                    <tr>
                        {tableHeaders &&
                            tableHeaders.map((table__head, index) => 
                                <th className={classes.product__instructor} key={index}>{table__head}</th>    
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map(table__item => 
                            <tr className={classes.product__item}>
                                <td className={classes.product__datacell}>
                                    <div className={classes.product__wrapper}>
                                        <img src={table__item.productImage}  alt="" />
                                        <div className={classes.product__info}>
                                            <p className={classes.product__title}>{table__item.productTitle}</p>
                                            <div className={classes.product__ratings}>
                                                {
                                                !tableHeaders ?
                                                    new Array(table__item.productRatings).fill().map((_, index) => 
                                                        <AiFillStar key={index}/>
                                                    ) : <></>
                                                }
                                            </div>
                                            <p className={classes.product__cost}>${table__item.productCost}  {tableHeaders ? <p style={{paddingLeft: "20px", fontWeight: "300"}}>x{table__item.productCount}</p> : <></>}</p> 
                                        </div>
                                    </div>
                                </td>
                                {tableHeaders ? <td className={classes.product__datacell}>
                                        <div className={classes.product__option}>
                                            <p className={classes.product__count}> $ {table__item.productCount * table__item.productCost}</p>
                                        </div>
                                    </td> : <></>
                                }
                                <td className={classes.product__datacell}>
                                    <div className={classes.product__option}>
                                        {!tableHeaders ?  <><FiTrash2/> <p> Удалить</p></>  : <div className={classes.product__details}> <p>ожидается платеж</p>  <Link>Деталь заказа</Link> </div>}
                                    </div>
                                </td>
                                <td className={classes.product__datacell}>
                                    <div className={classes.product__option}>
                                        {!tableHeaders ? <><FiShoppingBag/> <p> Добавить в корзину</p></> : <> <FiTrash2/> <p> Удалить</p></>}
                                    </div>
                                </td>
                            </tr>    
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

AccountProduct.propTypes = {
    data: PropTypes.array,
    tableHeaders: PropTypes.array
}

export default AccountProduct