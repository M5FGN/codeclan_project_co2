import React from "react";
import {deleteUser} from '../services/MainService.js';

const Output = ({user, removeUser}) => {

    // Calculation for the total carbon footprint

    const handleRemove = () => {
        deleteUser(user._id);
        removeUser(user._id);
    }

    return (
        <div>

            <ul>
                <li>Username: {user.username}</li>
                <li>Full name: {user.forename} {user.surname}</li>

                {/* <ul><b>Commuting</b>
                    <li>Footprint - Commute - Car: {user.footprint.commute.car}</li>
                    <li>Footprint - Commute - Train: {user.footprint.commute.train}</li>
                    <li>Footprint - Commute - Bus: {user.footprint.commute.bus}</li>
                    <li>Footprint - Commute - Cycling: {user.footprint.commute.cycling}</li>
                    <li>Footprint - Commute - Walking: {user.footprint.commute.walking}</li>
                    <li>Footprint - Commute - TOTAL: {user.footprint.commute.total}</li>
                </ul>
                     */}

                {/* This should be a loop, but is only here for example data  */}
                {user.footprint.diet !== null ? <li>Footprint - Diet: {user.footprint.diet}</li> : null}
                {user.footprint.air !== null ? <li>Footprint - Air travel: {user.footprint.air}</li> : null}
                {user.footprint.heating !== null ? <li>Footprint - Heating: {user.footprint.heating}</li> : null }
                {user.footprint.recycling !== null ? <li>Footprint - Recycling: {user.footprint.recycling}</li> : null}
            </ul>

            <p>To remove your account, click the 'Remove Account' button:</p>
            <button type='submit' onClick={handleRemove}>Remove Account</button>

        </div>

    )
}

export default Output;