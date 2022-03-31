import React from 'react';
import Button from '../../../components/UI/button/Button';
import classes from './AccountResetPwd.module.css';

const AccountResetPwd = () => {
    const btnCss = {
        marginLeft: "218px"
    }
    return (
        <div className={classes.account__resetpwd}>
            <div className={classes.resetpwd__header}>
                <h1>Изменить пароль</h1>
            </div>
            <div className={classes.resetpwd__container}>
                <form className={classes.resetpwd__form}>
                    <div className={classes.input__wrapper}>
                        <label htmlFor="password__name"><span>*</span> Существующий пароль:</label>
                        <input type="text" id="password__name" placeholder="Имя"/>
                    </div>
                    <div className={classes.input__wrapper}>
                        <label htmlFor="password__new"><span>*</span> Hовый пароль:</label>
                        <input type="text" id="password__new" placeholder="New Password"/>
                    </div>
                    <div className={classes.input__wrapper}>
                        <label htmlFor="password__repeat"><span>*</span> Повторно введите пароль:</label>
                        <input type="text" id="password__repeat" placeholder="Repeat Password"/>
                    </div>
                    <Button btnCss={btnCss} maxwidth="141px" type="submit" title="Сохранить"/>
                </form>
            </div>
        </div>
    )
}

export default AccountResetPwd
