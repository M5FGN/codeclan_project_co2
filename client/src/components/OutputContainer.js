import React from 'react';
import Chart from '../components/Chart';
import Output from '../components/Output';
import OutputTotal from '../components/OutputTotal';

const OutputContainer = ({user, totalCarbon}) => {

    return (
        <div>
        
            {totalCarbon > 0 ?
                < OutputTotal totalCarbon={totalCarbon}/>
                : null}

            <div>
                <Output user={user}/>
            </div>

                < Chart />

        </div>
    )

}
export default OutputContainer;