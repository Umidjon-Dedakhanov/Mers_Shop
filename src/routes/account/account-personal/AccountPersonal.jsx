import React from 'react';
import Button from '../../../components/UI/button/Button';
import classes from './AccountPersonal.module.css';

const AccountPersonal = () => {
    const btnCss = {
        marginLeft: "180px"
    }
    return (
        <div className={classes.account__personal}>
            <div className={classes.personal__header}>
                <h1>Личная информация</h1>
            </div>
            <div className={classes.personal__container}>
                <h2>Базовая информация</h2>
                <form className={classes.input__container}>
                    <div className={classes.input__wrapper}>
                        <label htmlFor="personal__name"><span>*</span> Ваше имя :</label>
                        <input id="personal__name" type="text" placeholder="Имя" />
                    </div>
                    <div className={classes.input__wrapper}>
                        <label htmlFor="personal__email">Электронная почта:</label>
                        <input id="personal__email" type="text" placeholder="Email" />
                    </div>
                    <div className={classes.input__wrapper}>
                        <label htmlFor="personal__number">Телефон:</label>
                        <input id="personal__number" type="text" placeholder="Phone number" />
                    </div>
                    <div className={classes.input__wrapper}>
                        <label htmlFor="personal__name">Дата рождения:</label>
                        <input id="personal__name" type="text" placeholder="month" />
                        <input id="personal__name" type="text" placeholder="day" />
                        <input id="personal__name" type="text" placeholder="year" />
                    </div>
                    <Button btnCss={btnCss} type="submit" maxwidth="141px" title="Сохранить"/>
                </form>
            </div>
        </div>
    )
}

export default AccountPersonal
