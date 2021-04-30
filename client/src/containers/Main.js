import React, {useState, useEffect} from 'react';
import UserSelect from '../components/UserSelect.js';
// import Diet from '../components/Diet.js';
// import Flights from '../components/Flights.js';
// import Heating from '../components/Heating.js';
// import Recycling from '../components/Recycling.js';
// import Travel from '../components/Travel.js';
// import Output from '../components/Output.js';

const Main = () => {
  
    const [users, setUsers] = useState([
        {username: 'Bigtuna',
            // This will be used for our list, comparison, or future login option
        forename: 'Jim',
        surname: 'Halper',
        footprint: {
            commute: {
                car: 1000, 
                    //Calculated from miles per day * CO2/mile,  * 365
                    // user.footprint.commute.car
                train: 500, 
                    // As above
                    // user.footprint.commute.train
                bus: null,
                cycling: null,
                walk: null,
                total: 1500
                    // If we want to display a total 'Commuting CO2'
                    // user.footprint.commute.total
            },
            air: 1000, 
                // Calculated from hours in air * CO2/hr
                // user.footprint.air
            diet: 1000, 
                // Calculated from "x amount of a week = this CO2", * 52 weeks
                // user.footprint.diet
            recycling: 500, 
                // user.footprint.recycling
            heating: 1000 
                // user.footprint.heating
        }},
    
        {username: 'Nard Dog',
        forename: 'Andrew',
        surname: 'Bernard',
        footprint: {
        commute: {
           car: null, 
           train: null, 
           bus: 400,
           cycling: null,
           walk: null,
           total: 400
        },
        air: 20, 
        diet: 10000, 
        recycling: 2000, 
        heating: 4000 
        }}]);
        // The above two examples are just till we hook up with the routers
        // DELETE ONCE DONE

    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        getUsers().then( (allUsers) => setUsers(allUsers))
    });

    // Grab all our users from the db
    const getUsers = () => {
        return fetch('http://localhost:5000/')
        .then(res => res.json())
    };

    // Add a new user
    const postUser = (payload) => {
        return fetch('http://localhost:5000/', {
            methid: 'POST',
            body: JSON.stringify(payload),
            headers: {'Content-type': 'application/json'}
        })
        .then(res => res.json())
    }
    const addUsers = (user) => {
        const temp = users.map(s => s);
        temp.push(user);
        setUsers(temp);
    }

    // Grabs our users, maps each one, so it renders the user name of each one, we can click on
    const usersOptions = users.map((user, index) => {
        return <option value={user}>{user.username}</option>
    })

    // Takes in our selected user, and sets selected user state:
    const onSelectedUser = (user) => setSelectedUser(user);

    return(
        <div>
            <h1>This is our main container</h1>
            <UserSelect users={users} onSelectedUser={onSelectedUser}/>
            {/* We then need a Button here to access another form to add a new user */}
        </div>
    )
}

export default Main;