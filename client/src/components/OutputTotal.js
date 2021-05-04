import React from 'react';
import OdoTest from '../components/OdoTest'

const OutputTotal = ({totalCarbon}) => {

    return (
        <div>

            <h4>Your total annual Carbon Foot Print is ... <p class="odo">< OdoTest totalCarbon={totalCarbon} /></p>Kilograms</h4>
            <hr/>
        </div>
    )
}
export default OutputTotal;
