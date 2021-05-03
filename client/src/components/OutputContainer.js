import React from 'react';
import Chart from '../components/Chart';
import Output from '../components/Output';
import OutputTotal from '../components/OutputTotal';

const OutputContainer = ({user, totalCarbon}) => {

    return (
        <div>
            {/* <div>
                {/* <h4>Username: {user.username}</h4> */}
                {/* <h4>Carbon Foot Print of {user.forename} {user.surname}</h4> */}
            {/* </div> */}
        
            {totalCarbon > 0 ?
                < OutputTotal totalCarbon={totalCarbon}/>
                : null}

            <div>
                {/* <h4>{user.forename}, this is how your <br></br>Carbon Foot Print is made up ...</h4> */}
                <Output user={user}/>
            </div>
    
                < Chart />

        </div>
    )

}
export default OutputContainer;