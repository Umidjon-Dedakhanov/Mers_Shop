import React from 'react';
import Button from '../../../components/UI/button/Button';
import classes from './KarzinkaForm.module.css'

const KarzinkaForm = () => {
  const btnCss = {
      marginLeft: "-25%"
  }
    return (
        <form className={classes.karzinka__form}>
            <ul className={classes.form__collection}>
                <li>
                    <label htmlFor="name"> <span>*</span> Ваше имя :</label>
                    <input required className={classes.form__name} id="name" type="text" placeholder="Имя"/>
                    <input required className={classes.form__surname}  id="surname" type="text" placeholder=" Фамилия"/>
                </li>
                <li>
                    <label htmlFor="region"> <span>*</span>Страна / регион :</label>
                    <input required id="region" type="text" placeholder="Укажите регион доставки"/>
                </li>
                <li>
                    <label htmlFor="province"> <span>*</span>Государство / Провинция /<br></br> Регион :</label>
                    <input required id="province" type="text" placeholder="Выберите состояние"/>
                </li>
                <li>
                    <label htmlFor="country"> <span>*</span>Город :</label>
                    <input required id="country" type="text" placeholder="Город"/>
                </li>
                <li>
                    <label htmlFor="address"> <span>*</span>Адрес:</label>
                    <input required id="address" type="text" placeholder="Адрес улитцы"/>
                </li>
                <li>
                    <label htmlFor="address2">Адрес 2 :</label>
                    <input required id="address2" type="text" placeholder="Квартира, номер комната…"/>
                </li>
                <li>
                    <label htmlFor="zip"> <span>*</span>ZIP / Почтовый индекс ::</label>
                    <input required id="zip" type="text" placeholder="Почтовый индекс "/>
                </li>
                <li>
                    <label htmlFor="telephone"> <span>*</span>Номер телефона :</label>
                    <input required id="telephone" type="text" placeholder="Ваш номер телефона"/>
                </li>
            </ul>
            <div>
            <input required type="checkbox" /><p>  Установить в качестве адреса доставки по умолчанию</p>
            </div>
            <Button btnCss={btnCss} type="submit" maxwidth="195px" title="Сохранить"/>
        </form>
    )
}

export default KarzinkaForm
