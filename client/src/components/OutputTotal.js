import React from 'react';
import OdoTest from '../components/OdoTest'

const OutputTotal = ({totalCarbon}) => {

    return (
        <div>

            <h4>Your total annual Carbon Foot Print is ... <p class="odo" id = 'totalCarbon'>< OdoTest totalCarbon={totalCarbon} /></p>Kilograms</h4>
            <hr/>
            {/* <h4>Total Carbon:</h4>
            <p>{totalCarbon}</p> */}
        </div>
    )
}
export default OutputTotal;
