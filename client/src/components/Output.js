import React from "react";

const Output = ({user}) => {

    const diet = user.footprint.diet;
    const air = user.footprint.air;
    const heating = user.footprint.heating;
    const recycling = user.footprint.recycling;
    const car = user.footprint.commute.car;
    const train = user.footprint.commute.train;
    const bus = user.footprint.commute.bus;
    const cycle = user.footprint.commute.cycling;
    const walk = user.footprint.commute.walk;

    return (
        <div>
            <ul>
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
            </ul>
        </div>
    )
}

export default Output;