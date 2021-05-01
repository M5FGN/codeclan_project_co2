import React, {useState, useEffect} from 'react';
import {getUsers} from '../services/MainService.js'
import UserSelect from '../components/UserSelect.js';
import Output from '../components/Output.js';
import NewUser from '../components/NewUser.js';
import Diet from '../components/Diet.js';
// import Flights from '../components/Flights.js';
// import Heating from '../components/Heating.js';
// import Recycling from '../components/Recycling.js';
// import Travel from '../components/Travel.js';


const Main = () => {
  
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [newUserForm, setNewUserForm] = useState(null);
    const [dietForm, setDietForm] = useState(null);

    useEffect(() => {
        getUsers().then(allUsers => setUsers(allUsers));
    },[]);

    // Takes in our selected user, and sets selected user state
    // Also sets the dietForm to render the Diet.js
    const onSelectedUser = (user) => {
        setSelectedUser(user)
        setDietForm(<Diet user={user}/>)
    };

    // Update users list locally
    const addUser = (newUser) => {
        const temp = users.map(s=>s);
        temp.push(newUser);
        setUsers(temp);
        // Call function to decide whether to render the form or hide it
        getNewUserForm(false);
    }

    // Toggle function to hide/display the NewUserForm
    const getNewUserForm = (toggle) => {
        if (toggle === true){
            setNewUserForm(<NewUser addUser={addUser}/>)
        }
        else if (toggle === false){
            setNewUserForm(null)
        }
    };

    return(
        <div>
            <h1>Welcome to Project CO2</h1>
            <h2><i>The Carbon Feets Print calculator</i></h2>
            <UserSelect users={users} onSelectedUser={onSelectedUser} getForm={getNewUserForm}/>
           
            {/* This renders when we click on Create Account, and hides when we click it again */}
            {newUserForm}

            {/* If we have selected a User, render their saved Output */}
            {selectedUser ? <Output user={selectedUser}/>: null}

            {/* If we have selected a User, render dietForm */}
            {selectedUser ? dietForm : null}
        </div>
    )
}

export default Main;