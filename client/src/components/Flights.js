import React, {useState} from "react";
import {updateUser} from '../services/MainService.js'

const Flights = ({figures, user, newData, getForm}) => {
    const [flightData, setFlightData] = useState(null);

    const onChange = (e) => {
        const flightData = e.target.value
        const result = flightData * figures.airtravel.airtime

        // This is where we need our calculator on what to do with the dietData

        setFlightData(result);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        user.footprint['air'] = parseFloat(flightData);
        updateUser(user)
        newData(user)
        getForm('Heating', user)
    }
    return (
        <div>
            
            <h2>Flights</h2>
            
            <form id="flights_form" onSubmit={onSubmit}>
                <h4>Input the number of hours of airplane travel you have taken in the past 12 months ...</h4>

                <p><input onChange={onChange} type="number" name="flight_hours" id="flight_hours" max="40" min="0" required/>

                    <label for="flight_hours">Flight Hours</label>
                </p>
        
                <input class="button" type="submit" value="Calculate" name="submit" />
    
            </form>
        </div>
    )

}
export default Flights;