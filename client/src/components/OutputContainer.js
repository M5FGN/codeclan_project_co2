import React from 'react';
import Chart from '../components/Chart';
import Output from '../components/Output';
import OutputTotal from '../components/OutputTotal';


const OutputContainer = () => {

    return (
        <div>
        < OutputTotal />
        This is where the Personalised Output will go.
        {/* < Output /> */}
        < Chart />
        </div>
    )

}
export default OutputContainer;