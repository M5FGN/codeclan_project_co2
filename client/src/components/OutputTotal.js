import React from 'react';
import OdoTest from '../components/OdoTest'

const OutputTotal = ({totalCarbon}) => {

    return (
        <div>

            < OdoTest />
            <h4>Total Carbon:</h4>
            <p>{totalCarbon}</p>
        </div>
    )
}
export default OutputTotal;