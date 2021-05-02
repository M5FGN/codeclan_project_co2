import React, {useState} from "react";
import {updateUser} from '../services/MainService.js'

const Heating = ({user, newData, getHeatingForm}) => {

    const [heatingTypeData, setHeatingTypeData] = useState(null);
    const [numberRoomsData, setNumberRoomsData] = useState(null);
    const [heatingCarbon, setHeatingCarbon] = useState(null);


    const onTypeChange = (e) => {
        const heatingType = e.target.id;
        let heating_api = 1;
        if (heatingType === 'gas'){
            // API value = 300 kg CO2/year (random guess)
            heating_api = 300;
        }
        else if (heatingType === 'electricity'){
            // API value = 500 kg CO2/year (random guess)
            heating_api = 500;
        }
        setHeatingTypeData(heating_api);
        totalCarbon();
    }

    const onValueChange = (e) => {
        const numRooms = e.target.value;
        const carbon = numRooms // Times some value in API
        setNumberRoomsData(carbon);
        totalCarbon();

    }

    // Some calculation based on total number of rooms, and heating type
    const totalCarbon = () => {
        const sum = heatingTypeData * numberRoomsData * 0.2 // Random guess
        setHeatingCarbon(sum);
    }


    const onSubmit = (e) => {
        e.preventDefault();
        user.footprint['heating'] = heatingCarbon
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
       
            <input class="button" type="submit" value="Calculate" name="submit" />
            
        </form>

        </div>

    )
}

export default Heating;