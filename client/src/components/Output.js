import React from "react";

const Output = ({user}) => {


    // This output will be where all our data is displayed for a given user
    // I've added in a UL just to render the data we have added, to make sure it is grabable
    // EXTENSION - Only render something if it exists. Do not render of value is null
    return (
        <div>
            <ul>
                <li>Username: {user.username}</li>
                <li>Full name: {user.forename} {user.surname}</li>

                <ul>Commuting:
                    <li>Footprint - Commute - Car: {user.footprint.commute.car}</li>
                    <li>Footprint - Commute - Train: {user.footprint.commute.train}</li>
                    <li>Footprint - Commute - Bus: {user.footprint.commute.bus}</li>
                    <li>Footprint - Commute - Cycling: {user.footprint.commute.cycling}</li>
                    <li>Footprint - Commute - Walking: {user.footprint.commute.walking}</li>
                    <li>Footprint - Commute - TOTAL: {user.footprint.commute.total}</li>
                </ul>

                <li>Footprint - Air travel: {user.footprint.air}</li>
                <li>Footprint - Diet: {user.footprint.diet}</li>
                <li>Footprint - Recycling: {user.footprint.recycling}</li>
                <li>Footprint - Heating: {user.footprint.heating}</li>
            </ul>
        </div>

    )
}

export default Output;