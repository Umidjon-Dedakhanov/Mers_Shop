import React from 'react';
import classes from './Account.module.css';
// import { SelectNav } from '../../utils/helpers';
import FilterNavbar from '../../components/UI/filter-navbar/FilterNavbar';
import AccountSidebar from './account-sidebar/AccountSidebar';
import KarzinkaTable from '../karzinka/karzinka-table/KarzinkaTable';
import { Information } from '../../components/home/information/Information';

const Account = () => { 
    const filter_items = [
        ["All products", "products", "Lorem 1"],
        ["All products", "products", "Lorem 1"],
        ["All products", "products", "Lorem 1"],
        ["All products", "products", "Lorem 1"]
    ]

    return (
        <div>
            <div className={classes.account__main}>
                <FilterNavbar  filterNavData={filter_items}/>
                <div className={classes.account__container}>
                    <AccountSidebar/>
                    <KarzinkaTable/>
                </div>
            </div>
            <Information/>
        </div>
    )
}

export default Account
