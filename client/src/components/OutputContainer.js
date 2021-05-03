import React from 'react';
import Chart from '../components/Chart';
import Output from '../components/Output';
import OutputTotal from '../components/OutputTotal';


const OutputContainer = ({user, totalCarbon}) => {

    return (
        <div>
            <div>
                <h4>Username: {user.username}</h4>
                <h4>Full name: {user.forename} {user.surname}</h4>
            </div>

            < Chart />

            {totalCarbon > 0 ?
                < OutputTotal totalCarbon={totalCarbon}/>
            :null}

            <div>
                <h4>Personalised Output Data:</h4>
                <Output user={user}/>
            </div>
   
        </div>
    )

}
export default OutputContainer;