import React from 'react';
import classes from './AccountAll.module.css';
import AccountProduct from '../account-product/AccountProduct';
// import productImage from "../../../assets/karzinka/product.png";
import useAuthFetch from '../../../hooks/useAuthFetch';
const ALL_BASKET_PRODUCTS_ENDPOINT = "clientMainsAPI";

const AccountAll = () => {
  const { data } = useAuthFetch(ALL_BASKET_PRODUCTS_ENDPOINT, null);
    // const data2 = [
    //     {
    //       id: 0,
    //       productImage: productImage,
    //       productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
    //       productRatings: 4,
    //       productCost: 12.99,
    //       productCount: 3
    //     }
    //   ]
      console.log(data)
    return (
        <div className={classes.account__all}>
           <div className={classes.all__header}>
                <h1>Неоплаченный</h1>
            </div>
            <AccountProduct data={data[data.length - 1]?.basketMain} tableHeaders={["Продукты", "Количество", "Статус заказа", "Опции"]} />
        </div>
    )
}

export default AccountAll
