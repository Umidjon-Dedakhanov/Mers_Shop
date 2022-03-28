import React from 'react';
import AccountProduct from '../account-product/AccountProduct';
import classes from './AccountNotpaid.module.css';
import productImage from "../../../assets/karzinka/product.png";

const AccountNotpaid = () => {
    const data = [
        {
          id: 0,
          productImage: productImage,
          productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
          productRatings: 4,
          productCost: 12.99,
          productCount: 3
        },
        {
          id: 1,
          productImage: productImage,
          productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
          productRatings: 4,
          productCost: 12.99,
          productCount: 5
        }
      ]
    return (
        <div className={classes.account__notpaid}>
            <div className={classes.notpaid__header}>
                <h1>Неоплаченный</h1>
            </div>
            <AccountProduct data={data} tableHeaders={["Продукты", "Количество", "Статус заказа", "Опции"]} />
        </div>
    )
}

export default AccountNotpaid
