import React from 'react';
import classes from './AccountSending.module.css';
import KarzinkaProcess from '../../../components/UI/karzinka-process/KarzinkaProcess';
import AccountProduct from '../account-product/AccountProduct';
import productImage from "../../../assets/karzinka/product.png";


const AccountSending = () => {
    const procCss = {
        width: "100%",
        justifyContent: "space-between",
        marginBottom: "37px"
    }
    const data = [
        {
          id: 0,
          productImage: productImage,
          productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
          productRatings: 4,
          productCost: 12.99,
          productCount: 3
        }
      ]
    return (
        <div className={classes.account__sending}>
            <div className={classes.sending__header}>
                <h1>Высылаем</h1>
            </div>
            <KarzinkaProcess procCss={procCss} activeColor="#000" lineColor="#000"/>
            <AccountProduct data={data} tableHeaders={["Продукты", "Количество", "Статус заказа", "Опции"]}/>
        </div>
    )
}

export default AccountSending
