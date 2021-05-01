import React from "react";

const Flights = () => {
    
    return (
        <div>
            
            <h2>Flights</h2>
            
            <form id="diet_form">
                <h4>Input the number of hours of airplane travel you have taken in the past 12 months ...</h4>

                <p><input type="number" name="flight_hours" id="flight_hours" max="40" min="0" />

                    <label for="flight_hours">Flight Hours</label>
                </p>
        
                <input type="submit" value="Calculate" name="submit" />
    
            </form>
        </div>
    )

}
export default Flights;