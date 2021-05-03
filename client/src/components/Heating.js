import React, {useState} from "react";
import {updateUser} from '../services/MainService.js'

const Heating = ({figures, user, newData, getForm}) => {

    const [heatingTypeData, setHeatingTypeData] = useState(0);
    const [numberRoomsData, setNumberRoomsData] = useState(0);

    const onTypeChange = (e) => {
        const heatingType = e.target.id;
        // let heating_api = 0;
        if (heatingType === 'gas'){
            // API value = 300 kg CO2/year (random guess)

            setHeatingTypeData(figures.gas)
        }
        if (heatingType === 'electricity'){
            // API value = 500 kg CO2/year (random guess)
            setHeatingTypeData(500)
        }
    }

    const onValueChange = (e) => {
        const numRooms = parseFloat(e.target.value);
        const carbon = numRooms // Times some value in API
        setNumberRoomsData(carbon)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        user.footprint['heating'] = (heatingTypeData*numberRoomsData);
        updateUser(user);
        newData(user);
        getForm('Recycling', user);
    }

    return (

        <div>
            <h2>Heating</h2>
        <form id="heating_form" onSubmit={onSubmit}>
            <h4>Choose the type of heating in your house ...</h4>
            
            <p>
            <input onChange={onTypeChange} type="radio" name="heating_type" id="gas" value="" required/>
            <label for="gas">Gas</label>
            </p>
            <p>
            <input onChange={onTypeChange} type="radio" name="heating_type" id="electricity" value="" />
            <label for="electricity">Electricity</label>
            </p>

            <h4>Input the number of rooms in your house ...</h4>
            <p><input onChange={onValueChange} type="number" name="rooms" id="rooms" max="10" min="1" required/>
            <label for="rooms">Rooms</label>
            </p>
       
            <input class="button" type="submit" value="Calculate" name="submit" />
            
        </form>

        </div>

    )
}

export default Heating;