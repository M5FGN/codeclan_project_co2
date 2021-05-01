import React, {useState} from "react";
import {updateUser} from '../services/MainService.js'

const Heating = ({user, newData, getHeatingForm}) => {

    const [heatingData, setHeatingData] = useState(null);


    const onTypeChange = () => {
        // Return the calculated value of gas vs electric here
    }

    const onValueChange = (e) => {
        const heatingData = e.target.value

        setHeatingData(heatingData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        user.footprint['heating'] = heatingData
        updateUser(user)
        newData(user)
        getHeatingForm(false, user)
    }

    return (

        <div>
            <h2>Heating</h2>
        <form id="heating_form" onSubmit={onSubmit}>
            <h4>Choose the type of heating in your house ...</h4>
            
            <p>
            <input onChange={onTypeChange} type="radio" name="heating_type" id="gas" value="" />
            <label for="gas">Gas</label>
            </p>
            <p>
            <input onChange={onTypeChange} type="radio" name="heating_type" id="electricity" value="" />
            <label for="electricity">Electricity</label>
            </p>

            <h4>Input the number of rooms in your house ...</h4>
            <p><input onChange={onValueChange} type="number" name="rooms" id="rooms" max="10" min="1" />
            <label for="rooms">Rooms</label>
            </p>
       
            <input type="submit" value="Calculate" name="submit" />
            
        </form>

        </div>

    )
}

export default Heating;