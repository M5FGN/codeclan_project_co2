import React from "react";
import {deleteUser} from '../services/MainService.js';

const Output = ({user, removeUser, totalCarbon}) => {

    //Removes users in their entirety
    const handleRemove = () => {
        deleteUser(user._id);
        removeUser(user._id);
    }

    const diet = user.footprint.diet;
    const air = user.footprint.air;
    const heating = user.footprint.heating;
    const recycling = user.footprint.recycling;
    const car = user.footprint.commute.car;
    const train = user.footprint.commute.train;
    const bus = user.footprint.commute.bus;
    const cycle = user.footprint.commute.cycling;
    const walk = user.footprint.commute.walk;

// The below is a trial for looping through the data to render it, may be useful, doesn't work yet

    // const data = {
    //     diet: user.footprint.diet,
    //     air: user.footprint.air,
    //     heating:  user.footprint.heating,
    //     recycling: user.footprint.recycling,
    //     car: user.footprint.commute.car,
    //     train: user.footprint.commute.train,
    //     bus: user.footprint.commute.bus,
    //     cycle: user.footprint.commute.cycling,
    //     walk: user.footprint.commute.walk 
    // }

    // const dataLoop = () => {
    //     for (let [key, value] in data){
    //         if (!isNaN(value) && value !== null){
    //             return <li>Footprint - {key} {value}</li>
    //         }
    //     }
    // }


    return (
        <div>
            <ul>
                <li>Username: {user.username}</li>
                <li>Full name: {user.forename} {user.surname}</li>

                {/* This should be a loop, but is only here for example data  */}
                {/* FOR INFO:
                    .The data input by default is a string. We  have changed all input data to be parsed into a number before storage.
                    .This means that any blank entries not filled in, are stored as 'NaN'
                    .And initially empty ones are 'null' when we make a new user
                    .So we only want to render those where the data is a number i.e. isNaN is false, so !isNaN is true.
                    .And where data does not equal null
                */}
                {!isNaN(diet) && diet !== null ? <li>Footprint - Diet: {diet}</li> : null}
                {!isNaN(air) && air !== null ? <li>Footprint - Air travel: {air}</li> : null}
                {!isNaN(heating) && heating !== null ? <li>Footprint - Heating: {heating}</li> : null }
                {!isNaN(recycling) && recycling !== null ? <li>Footprint - Recycling: {recycling}</li> : null}

                <ul>
                {!isNaN(car) && car !== null ? <li>Footprint - Commute - Car: {car}</li> : null}
                {!isNaN(train) && train !== null ? <li>Footprint - Commute - Train: {train}</li> : null}
                {!isNaN(bus) && bus !== null ? <li>Footprint - Commute - Bus: {bus}</li> : null}
                {!isNaN(cycle) && cycle !== null ? <li>Footprint - Commute - Cycling: {cycle}</li> : null}
                {!isNaN(walk) && walk !== null ? <li>Footprint - Commute - Walking: {walk}</li> : null}
                </ul>

                {totalCarbon > 0 ? <li>Total Carbon: {totalCarbon}</li> : null}

            </ul>

            <p>To remove your account, click the 'Remove Account' button:</p>
            <button class="button" type='submit' onClick={handleRemove}>Remove Account</button>

        </div>

    )
}

export default Output;