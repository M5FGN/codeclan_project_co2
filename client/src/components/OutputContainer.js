import React from 'react';
import Chart from '../components/Chart';
import Output from '../components/Output';
import OutputTotal from '../components/OutputTotal';

const OutputContainer = ({user, totalCarbon, averageData, averageTotal}) => {

    return (
        <div>
        
            {totalCarbon > 0 ?
                < OutputTotal totalCarbon={totalCarbon} averageTotal={averageTotal}/>
                : null}

            <div>
                <Output user={user}/>
            </div>

    
                < Chart user={user} averageData={averageData}/>


        </div>
    )

}
export default OutputContainer;