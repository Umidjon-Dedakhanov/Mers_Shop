import React from 'react'
import { useSelector } from 'react-redux'
import KarzinkaNavbar from '../karzinka/karzinka-navbar/KarzinkaNavbar'
import KarzinkaPaymentPanel from './karzinka-peyment-panel/KarzinkaPaymentPanel'

const KarzinkaPayment = () => {

    return (
        <div>
            <KarzinkaNavbar/>
            <KarzinkaPaymentPanel/>
        </div>
    )
}

export default KarzinkaPayment
