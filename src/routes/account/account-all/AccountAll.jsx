import React from 'react';
import classes from './AccountAll.module.css';
import AccountProduct from '../account-product/AccountProduct';
import productImage from "../../../assets/karzinka/product.png";

const AccountAll = () => {
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
        },
        {
            id: 2,
            productImage: productImage,
            productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
            productRatings: 4,
            productCost: 12.99,
            productCount: 5
          },
          {
            id: 3,
            productImage: productImage,
            productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
            productRatings: 4,
            productCost: 12.99,
            productCount: 5
          },
          {
            id: 4,
            productImage: productImage,
            productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
            productRatings: 4,
            productCost: 12.99,
            productCount: 5
          }
      ]
    return (
        <div className={classes.account__all}>
           <div className={classes.all__header}>
                <h1>Неоплаченный</h1>
            </div>
            <AccountProduct data={data} tableHeaders={["Продукты", "Количество", "Статус заказа", "Опции"]} />
        </div>
    )
}

export default AccountAll
