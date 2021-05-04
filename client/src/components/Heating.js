import React, {useState} from "react";
import {updateUser} from '../services/MainService.js'

const Heating = ({user, newData, getForm, figures}) => {

    const [heatingTypeData, setHeatingTypeData] = useState(0);
    const [numberRooms, setNumberRooms] = useState(0);


    const onTypeChange = (e) => {
        const heatingType = e.target.id;
        
        if (heatingType === 'gas'){
            setHeatingTypeData(figures.gas.rooms_1)
        }
        if (heatingType === 'electricity'){
            setHeatingTypeData(figures.electricity.rooms_1)
        }
    }

    const onValueChange = (e) => {
        setNumberRooms(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // Heating data is kg CO2/y for 1 room, going up by 1.3 for additional rooms
        user.footprint['heating'] = parseInt(heatingTypeData*numberRooms*1.3);
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
            <input onChange={onTypeChange} type="radio" name="heating_type" id="gas" required/>
            <label for="gas">Gas</label>
            </p>
            <p>
            <input onChange={onTypeChange} type="radio" name="heating_type" id="electricity" />
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