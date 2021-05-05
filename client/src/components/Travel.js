import React, {useState} from "react";
import {updateUser} from '../services/MainService.js'

const Travel = ({user, newData, getForm, figures}) => {

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

    // const onChange = (e) => {
    //     // Take the 'name' of the event
    //     // convert 'name' string to name.. object?
    //     // if name === null (referring to the state name)
    //     // 'set' + 'Name', equals setTrain (will need to capitalise first letter)
    //     // 'on' + 'Name', equals onTrain
    //     // render with:
    //         // onChange={onTrain}
    //         // name, id, and for = {miles_'name'}
    //         // Text to = `Miles travelled by ${Name} per day`
    //     const nameString = e.target.name; // Grab the name
    //     const changeMethodString = 'set' + nameString; // Create the setName e.g. setTrain, as a string
    // }

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

// Info for calculations to SI
    const multiplier = 5*52;
    const api = figures.transport;

// 5 Functions to set the user inputs
    const onTrain = (e) => {
        const input = e.target.value;
        const apiData = api.train;
        const result = input * apiData * multiplier;
        setTrainData(result);
    };
    const onBus = (e) => {
        const input = e.target.value;
        const apiData = api.bus;
        const result = input * apiData * multiplier;
        setBusData(result);
    };
    const onCar = (e) => {
        const input = e.target.value;
        const apiData = api.petrolcar;
        const result = input * apiData * multiplier;
        setCarData(result);
    };
    const onBike = (e) => {
        const input = e.target.value;
        const apiData = api.cycling;
        const result = input * apiData * multiplier;
        setBikeData(result);
    };
    const onWalk = (e) => {
        const input = e.target.value;
        const apiData = api.walking;
        const result = input * apiData * multiplier;
        setWalkData(result);
    };


    const onSubmit = (e) => {
        e.preventDefault();

        const dbData = () => {
            const methods = [train, bus, car, bike, walk];
            const methods_data = [trainData, busData, carData, bikeData, walkData];
            const strings = ['train', 'bus', 'car', 'cycling', 'walk'];
        
            let travelTotal = 0;

            for (let i = 0; i < methods.length; i++){
                const string = strings[i];
                if (methods[i] !== null){
                user.footprint.commute[string] = parseInt(methods_data[i]);
                travelTotal += (methods_data[i]);
                }
                else {
                    user.footprint.commute[string] = null
                }
            user.footprint.commute['travelTotal'] = parseInt(travelTotal);
            };
        };
            

        dbData();
        updateUser(user);
        newData(user);
        getForm('Flights', user);
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