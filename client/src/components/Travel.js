import React, {useState} from "react";
import {updateUser} from '../services/MainService.js'

const Travel = ({user, newData, getTravelForm}) => {
    const [travelType, setTravelType] = useState(null);

    const onTypeChange = (e) => {
        // travelType[e.target.id] = e.target.value;
        // setTravelType(travelType);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        // user.footprint.commute['car'] = carData
        // updateUser(user)
        // newData(user)
        getTravelForm(false, user)
    }
    return (

        <div>
        <h2>Travel to Work or School</h2>
        <form id="travel_form" onsubmit={onSubmit}>
            <h4>Choose your mode of travel ...</h4>
            
            <p>
            <input onChange={onTypeChange} type="checkbox" name="train" id="train" value="" />
            <label for="train">Train</label>
            </p>
            <p>
            <input onChange={onTypeChange} type="checkbox" name="bus" id="bus" value="" />
            <label for="bus">Bus</label>
            </p>
            <p>
            <input onChange={onTypeChange} type="checkbox" name="car" id="car" value="" />
            <label for="car">Car</label>
            </p>
            <p>
            <input onChange={onTypeChange} type="checkbox" name="bike" id="bike" value="" />
            <label for="bike">Bike</label>
            </p>
            <p>
            <input onChange={onTypeChange} type="checkbox" name="walk" id="walk" value="" />
            <label for="walk">Walk</label>
            </p>
 
            <h4>Input distance travelled ...</h4>
            <p><input type="number" name="miles_train" id="miles_train" max="50" min="0" />
            <label for="miles_train">Miles Travelled by Train per day</label>
            </p>

            <p><input type="number" name="miles_bus" id="miles_bus" max="50" min="0" />
            <label for="miles_bus">Miles Travelled by Bus per day</label>
            </p>

            <p><input type="number" name="miles_car" id="miles_car" max="50" min="0" />
            <label for="miles_car">Miles Travelled by Car per day</label>
            </p>

            <p><input type="number" name="miles_bike" id="miles_bike" max="50" min="0" />
            <label for="miles_bike">Miles Cycled per day</label>
            </p>

            <p><input type="number" name="miles_walk" id="miles_walk" max="50" min="0" />
            <label for="miles_walk">Miles Walked per day</label>
            </p>
       
            <input type="submit" value="Calculate" name="submit" />
            
        </form>
        </div>

    )
}

export default Travel;