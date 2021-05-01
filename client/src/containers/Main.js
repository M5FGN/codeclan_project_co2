import React, {useState, useEffect} from 'react';
import UserSelect from '../components/UserSelect.js';
import Output from '../components/Output.js';
import NewUser from '../components/NewUser.js';
// import Diet from '../components/Diet.js';
// import Flights from '../components/Flights.js';
// import Heating from '../components/Heating.js';
// import Recycling from '../components/Recycling.js';
// import Travel from '../components/Travel.js';


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
    },[]);
    
    // Takes in our selected user, and sets selected user state:
    const onSelectedUser = (user) => {
        console.log(user)
        setSelectedUser(user)}

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
    const addUser = (user) => {
        const temp = users.map(s => s);
        temp.push(user);
        setUsers(temp);
    }

    // Set up a state so we can render our form when we want it
    const [newUserForm, setNewUserForm] = useState(null);

    // Function from the button onClick. It will set the form to our NewUser form
    const getNewUserForm= () => {
        setNewUserForm(<NewUser/>)
    };



    // RENDERING OUR FORMS
    // CASE: An existing user goes onto the website
        // Main page - Just has a list. They select themselves
        // Output page - Shows their output. There's a button to edit their stuff
        // This then renders the first form Diet.js, and each form in turn, with their default values showing
    // CASE: A new user is on the site
        // Main page

    return(
        <div>
            <h1>Welcome to Project CO2</h1>
            <h2><i>The Carbon Feets Print calculator</i></h2>
            <UserSelect users={users} onSelectedUser={onSelectedUser} getForm={getNewUserForm}/>
            {newUserForm}

            {/* If we have selected a User, render their saved Output */}
            {selectedUser ? <Output user={selectedUser}/> : null}
        </div>
    )
}

export default Main;