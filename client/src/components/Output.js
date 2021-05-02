import React from "react";
import {deleteUser} from '../services/MainService.js';

const Output = ({user, removeUser}) => {

    // Calculation for the total carbon footprint will go here
    // Also a good reference here on where to grab all our data from
    const totalCarbons = [
        user.footprint.diet,
        user.footprint.air,
        user.footprint.heating,
        user.footprint.recycling,
        user.footprint.commute.car,
        user.footprint.commute.train,
        user.footprint.commute.bus,
        user.footprint.commute.cycling,
        user.footprint.commute.walk
    ];

    // TOTAL CARBON: Not working yet, the below Reduce is just adding strings together
    // const totalCarbon = totalCarbons.reduce((ar, curr) => {
    //     return ar + curr
    // }, 0)
    // console.log(totalCarbon);






    //Removes users in their entirety
    const handleRemove = () => {
        deleteUser(user._id);
        removeUser(user._id);
    }

    return (
        <div>
            <ul>
                <li>Username: {user.username}</li>
                <li>Full name: {user.forename} {user.surname}</li>

                {/* This should be a loop, but is only here for example data  */}
                {user.footprint.diet !== null ? <li>Footprint - Diet: {user.footprint.diet}</li> : null}
                {user.footprint.air !== null ? <li>Footprint - Air travel: {user.footprint.air}</li> : null}
                {user.footprint.heating !== null ? <li>Footprint - Heating: {user.footprint.heating}</li> : null }
                {user.footprint.recycling !== null ? <li>Footprint - Recycling: {user.footprint.recycling}</li> : null}

                <ul>
                {user.footprint.commute.car !== null ? <li>Footprint - Commute - Car: {user.footprint.commute.car}</li> : null}
                {user.footprint.commute.train !== null ? <li>Footprint - Commute - Train: {user.footprint.commute.train}</li> : null}
                {user.footprint.commute.bus !== null ? <li>Footprint - Commute - Bus: {user.footprint.commute.bus}</li> : null}
                {user.footprint.commute.cycling !== null ? <li>Footprint - Commute - Cycling: {user.footprint.commute.cycling}</li> : null}
                {user.footprint.commute.walk !== null ? <li>Footprint - Commute - Walking: {user.footprint.commute.walking}</li> : null}
                </ul>
                    
            </ul>

            <p>To remove your account, click the 'Remove Account' button:</p>
            <button class="button" type='submit' onClick={handleRemove}>Remove Account</button>

        </div>

    )
}

export default Output;