import React from "react";

const Heating = () => {

    return (

        <div>
            <h2>Heating</h2>
        <form id="heating_form">
            <h4>Choose the type of heating in your house ...</h4>
            
            <p>
            <input type="radio" name="heating_type" id="gas" value="" />
            <label for="gas">Gas</label>
            </p>
            <p>
            <input type="radio" name="heating_type" id="electricity" value="" />
            <label for="electricity">Electricity</label>
            </p>

            <h4>Input the number of rooms in your house ...</h4>
            <p><input type="number" name="rooms" id="rooms" max="10" min="1" />
            <label for="rooms">Rooms</label>
            </p>
       
            <input type="submit" value="Calculate" name="submit" />
            
        </form>

        </div>

    )
}

export default Heating;