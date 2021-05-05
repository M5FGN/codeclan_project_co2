import React from 'react';
import OdoTest from '../components/OdoTest'

const OutputTotal = ({totalCarbon, averageTotal}) => {

    let string = 'test'
    const avgCompare = () => {
        if (totalCarbon < averageTotal){
            const val = averageTotal - totalCarbon
            string = `That's ${val} kg less than average!`
        }
        if (totalCarbon === averageTotal){
            string = "That's the same as average!"
        }
        if (totalCarbon > averageTotal){
            const val = totalCarbon - averageTotal
            string = `That's ${val} kg more than average!`
        }
    }

    avgCompare();
    
    return (
        <div>


           

            <h4>Your total annual Carbon Foot Print is ... <p class="odo" id = 'totalCarbon'>< OdoTest totalCarbon={totalCarbon} /></p>Kilograms</h4>
            <h4>{string}</h4>

            <hr/>

        </div>
    )
}
export default OutputTotal;
