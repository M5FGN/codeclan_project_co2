import React, {useState} from "react";
import {updateUser} from '../services/MainService.js'

const Travel = ({user, newData, getTravelForm}) => {

    const [train, setTrain] = useState(null);
    const [bus, setBus] = useState(null);
    const [car, setCar] = useState(null);
    const [bike, setBike] = useState(null);
    const [walk, setWalk] = useState(null);

    const [trainData, setTrainData] = useState(null);
    const [busData, setBusData] = useState(null);
    const [carData, setCarData] = useState(null);
    const [bikeData, setBikeData] = useState(null);
    const [walkData, setWalkData] = useState(null);


// Five onChange functions for checkboxes to toggle render of miles per type of transport inputs
    const onTrainChange = () => {
        if (train === null){
            setTrain(
            <p>
                <input onChange={onTrain} type="number" name="miles_train" id="miles_train" max="50" min="0" />
                <label for="miles_train">Miles Travelled by Train per day</label>
            </p>
            )
        }
        else if (train !== null){
            setTrain(null)
        }
    }

    const onBusChange = () => {
        if (bus === null){
            setBus(
            <p>
                <input onChange={onBus} type="number" name="miles_bus" id="miles_bus" max="50" min="0" />
                <label for="miles_bus">Miles Travelled by Bus per day</label>
            </p>
            )
        }
        else if (bus !== null){
            setBus(null)
        }
    }

    const onCarChange = () => {
        if (car === null){
            setCar(
            <p>
                <input onChange={onCar} type="number" name="miles_car" id="miles_car" max="50" min="0" />
                <label for="miles_car">Miles Travelled by Car per day</label>
            </p>
            )
        }
        else if (car !== null){
            setCar(null)
        }
    }

    const onBikeChange = () => {
        if (bike === null){
            setBike(
            <p>
                <input onChange={onBike} type="number" name="miles_bike" id="miles_bike" max="50" min="0" />
                <label for="miles_bike">Miles Cycled per day</label>
            </p>
            )
        }
        else if (bike !== null){
            setBike(null)
        }
    }

    const onWalkChange = () => {
        if (walk === null){
            setWalk(
            <p>
                <input onChange={onWalk} type="number" name="miles_walk" id="miles_walk" max="50" min="0" />
                <label for="miles_walk">Miles Walked per day</label>
            </p>
            )
        }
        else if (walk !== null){
            setWalk(null)
        }
    }
    
// 5 Functions to set the user inputs
    const onTrain = (e) => {
        const trainCarbon = e.target.value;
        setTrainData(trainCarbon);
    };
    const onBus = (e) => {
        const busCarbon = e.target.value;
        setBusData(busCarbon);
    };
    const onCar = (e) => {
        const carCarbon = e.target.value;
        setCarData(carCarbon);
    };
    const onBike = (e) => {
        const bikeCarbon = e.target.value;
        setBikeData(bikeCarbon);
    };
    const onWalk = (e) => {
        const walkCarbon = e.target.value;
        setWalkData(walkCarbon);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        user.footprint.commute['train'] = trainData;
        user.footprint.commute['bus'] = busData;
        user.footprint.commute['car'] = carData;
        user.footprint.commute['cycling'] = bikeData;
        user.footprint.commute['walk'] = walkData;
        updateUser(user)
        newData(user)
        getTravelForm(false, user)
        console.log(user.footprint)

    }

    return (

        <div>
        <h2>Travel to Work or School</h2>
        <form id="travel_form" onSubmit={onSubmit}>
            <h4>Choose your mode of travel ...</h4>
            
            <p>
            <input onChange={onTrainChange} type="checkbox" name="train" id="train" value=""/>
            <label for="train">Train</label>
            </p>
            
            <p>
            <input onChange={onBusChange} type="checkbox" name="bus" id="bus" value="" />
            <label for="bus">Bus</label>
            </p>
            <p>
            <input onChange={onCarChange} type="checkbox" name="car" id="car" value="" />
            <label for="car">Car</label>
            </p>
            <p>
            <input onChange={onBikeChange} type="checkbox" name="bike" id="bike" value="" />
            <label for="bike">Bike</label>
            </p>
            <p>
            <input onChange={onWalkChange} type="checkbox" name="walk" id="walk" value="" />
            <label for="walk">Walk</label>
            </p>
 
            <h4>Input distance travelled ...</h4>
            
            {train}
            {bus}
            {car}
            {bike}
            {walk}
            
            <input class="button" type="submit" value="Calculate" name="submit" />

        </form>
        </div>

    )
}

export default Travel;