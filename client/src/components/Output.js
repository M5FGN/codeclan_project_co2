import React from "react";

const Output = ({user}) => {

    // Calculatio for the total carbon footprint

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

                {/* This should be a loop */}
                {user.footprint.diet ? <li>Footprint - Diet: {user.footprint.diet}</li> : null}
                {user.footprint.air ? <li>Footprint - Air travel: {user.footprint.air}</li> : null}
                {user.footprint.heating ? <li>Footprint - Heating: {user.footprint.heating}</li> : null }
                {user.footprint.recycling ? <li>Footprint - Recycling: {user.footprint.recycling}</li> : null}
            </ul>
        </div>

    )
}

export default Output;