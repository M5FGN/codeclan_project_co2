import React, {useState, useEffect} from 'react';
import {getUsers} from '../services/MainService.js'
import UserSelect from '../components/UserSelect.js';
import Output from '../components/Output.js';
import NewUser from '../components/NewUser.js';
import Diet from '../components/Diet.js';
import Travel from '../components/Travel.js';
import Flights from '../components/Flights.js';
import Heating from '../components/Heating.js';
import Recycling from '../components/Recycling.js';


const Main = () => {
  
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [newUserForm, setNewUserForm] = useState(null);
    const [dietForm, setDietForm] = useState(null);
    const [travelForm, setTravelForm] = useState(null);
    const [flightsForm, setFlightsForm] = useState(null);
    const [heatingForm, setHeatingForm] = useState(null);
    const [recyclingForm, setRecyclingForm] = useState(null);


    useEffect(() => {
        getUsers().then(allUsers => setUsers(allUsers));

    },[]);

    // Takes in our selected user, and sets selected user state
    // Also sets the dietForm to render the Diet.js
    const onSelectedUser = (user) => {
        setSelectedUser(user)
        getDietForm(true, user)
    };

    // Update users list locally when we add a new user
    const addUser = (newUser) => {
        const temp = users.map(s=>s);
        temp.push(newUser);
        setUsers(temp);
        // Call function to decide whether to render the form or hide it
        getNewUserForm(false);
    }

    // Update user locally after we add new data
    const updateNewData = updatedUser => {
        const updatedUserIndex = users.findIndex(user => user._id === updatedUser._id);
        const updatedUsers = [...users];
        updatedUsers[updatedUserIndex] = updatedUser;
        setUsers(updatedUsers)
    }

    // Toggle function to hide/display the NewUserForm
    const getNewUserForm = (toggle) => {
        if (toggle === true){
            setNewUserForm(<NewUser addUser={addUser} />)
        }
        else if (toggle === false){
            setNewUserForm(null)
        }
    };

    // Toggle function display the diet form, then render flights if not displayed
    const getDietForm = (toggle, user) => {
        if (toggle === true){
            setDietForm(<Diet user={user} newData={updateNewData} getDietForm={getDietForm}/>)
        }
        else if (toggle === false){
            setDietForm(null)
            // getTravelForm(true, user)
            getFlightsForm(true, user)
        }
    }

    // const getTravelForm = (toggle, user) => {
    //     if (toggle === true){
    //         setTravelForm(<Travel user={user} newData={updateNewData} getTravelForm={getTravelForm}/>)
    //     }
    //     else if (toggle === false){
    //         setTravelForm(null)
    //         getFlightsForm(true, user)
    //     }
    // }

    const getFlightsForm = (toggle, user) => {
        if (toggle === true){
            setFlightsForm(<Flights user={user} newData={updateNewData} getFlightsForm={getFlightsForm}/>)
        } else if (toggle === false){
            setFlightsForm(null)
            getHeatingForm(true, user)
        }
    }

    const getHeatingForm = (toggle, user) => {
        if (toggle === true){
            setHeatingForm(<Heating user={user} newData={updateNewData} getHeatingForm={getHeatingForm}/>)
        } else if (toggle === false){
            setHeatingForm(null)
            getRecyclingForm(true,user)
        }
    }
    const getRecyclingForm = (toggle, user) => {
        if (toggle === true){
            setRecyclingForm(<Recycling user={user} newData={updateNewData} getRecyclingForm={getRecyclingForm}/>)
        } else if (toggle === false){
            setRecyclingForm(null)
            // Then get some other kind of "Do you want to edit your data???"
        }
    }
    
    return(
        <div>
            <h1>Welcome to Project CO2</h1>

            <h2><i>The Carbon Feets Print calculator</i></h2>

            <UserSelect users={users} onSelectedUser={onSelectedUser} getForm={getNewUserForm}/>
           
            {newUserForm}

            {/* If we have selected a User, render their saved Output */}
            {selectedUser ? <Output user={selectedUser}/>: null}


            <div id='current_rendered_form'>
                {dietForm}
                {travelForm}
                {flightsForm}
                {heatingForm}
                {recyclingForm}
            </div>
        </div>
    )
}

export default Main;