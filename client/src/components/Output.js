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
    const first_name = user.forename;

    return (
        <div>
                {!isNaN(diet) && diet !== null ? <h4>{first_name}, this is how your <br></br>Carbon Foot Print is made up ...</h4> : null}
                {!isNaN(diet) && diet !== null ? <p class="outtxt">Your diet contributes {diet} to your carbon footprint.</p> : null}
                {!isNaN(air) && air !== null ? <p class="outtxt">Air travel contributes {air} to your carbon footprint.</p> : null}
                {!isNaN(heating) && heating !== null ? <p class="outtxt">Your Home Heating contributes {heating} to your carbon footprint.</p> : null }
                {!isNaN(recycling) && recycling !== null ? <p class="outtxt">Your Recycling habits contribute {recycling} to your carbon footprint.</p> : null}
                {!isNaN(car) && car !== null ? <p class="outtxt">Travelling by Car contributes {car} to your carbon footprint.</p> : null}
                {!isNaN(train) && train !== null ? <p class="outtxt">Travelling by Train contributes {train} to your carbon footprint.</p> : null}
                {!isNaN(bus) && bus !== null ? <p class="outtxt">Travelling by Bus contributes {bus} to your carbon footprint.</p> : null}
                {!isNaN(cycle) && cycle !== null ? <p class="outtxt">Cycling contributes {cycle} to your carbon footprint.</p> : null}
                {!isNaN(walk) && walk !== null ? <p class="outtxt">Walking contributes {walk} to your carbon footprint.</p> : null}
        </div>
    )
}

export default Output;