import React from 'react';
import Chart from '../components/Chart';
import Output from '../components/Output';
import OutputTotal from '../components/OutputTotal';


const OutputContainer = () => {

    return (
        <div>
        < Chart />
        < OutputTotal />
        This is where the Personalised Output will go.
        {/* < Output /> */}
        </div>
    )

}
export default OutputContainer;