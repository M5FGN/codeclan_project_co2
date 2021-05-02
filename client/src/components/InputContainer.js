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
// import InputContainer from '../components/InputContainer.js';
import OutputContainer from '../components/OutputContainer.js';
import Logo from '../components/Logo.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faPaw } from '@fortawesome/free-solid-svg-icons';


const InputContainer = () => {
  
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [newUserForm, setNewUserForm] = useState(null);
    const [carbonForm, setForm] = useState(null)


    useEffect(() => {
        getUsers().then(allUsers => setUsers(allUsers));
    },[]);

    // Takes in our selected user, and sets selected user state
    // Also sets the dietForm to render the Diet.js
    const onSelectedUser = (user) => {
        setSelectedUser(user);
        getForm('Diet', user)
    };

    // Update users list locally when we add a new user
    const addUser = (newUser) => {
        const temp = users.map(s=>s);
        temp.push(newUser);
        setUsers(temp);
        getNewUserForm(false);
        onSelectedUser(newUser);
    }

    // Remove user locally
    const removeUser = (id) => {
        setUsers(users.filter(user => user._id !== id))
        // The above will loop through each one and filter out where id doesn't match
        // Alternatively we can splice it and return new list
        setSelectedUser(null);
    }

    // Update user locally after we add new data
    const updateNewData = updatedUser => {
        const updatedUserIndex = users.findIndex(user => user._id === updatedUser._id);
        const updatedUsers = [...users];
        updatedUsers[updatedUserIndex] = updatedUser;
        setUsers(updatedUsers)
    }

    // Sets the state of the current form to be displayed
    const getForm = (form, user) => {
        if (form === 'Diet'){
            setForm(<Diet user={user} newData={updateNewData} getForm={getForm}/>)
        };
        if (form === 'Travel'){
            setForm(<Travel user={user} newData={updateNewData} getForm={getForm}/>)
        };
        if (form === 'Flights'){
            setForm(<Flights user={user} newData={updateNewData} getForm={getForm}/>)
        };
        if (form === 'Heating'){
            setForm(<Heating user={user} newData={updateNewData} getForm={getForm}/>)
        };
        if (form === 'Recycling'){
            setForm(<Recycling user={user} newData={updateNewData} getForm={getForm}/>)
        } 
        if (form === null){
            setForm(null);
        };
    };

    // Toggle function to hide/display the NewUserForm
    const getNewUserForm = (toggle) => {
        if (toggle === true){
            setNewUserForm(<NewUser addUser={addUser} />);
            setSelectedUser(null);
        }
        else if (toggle === false){
            setNewUserForm(null);
        }
    };

   
    return(
        // <div class="main">
        //     <div class="white">
        //         <div class="header">
        //         <div class="logo"><img class="logo_img" src= {Logo} alt="ProjectCO2 Logo"></img></div>
        //     {/* <p class="logo_text">PROJECT CO2</p> */}
        //     {/* <div><FontAwesomeIcon icon={faPaw} /></div> */}
        //     <div class="header_text">
        //     <h2>Carbon Foot Print Calculator</h2>
        //     <p><i>Created by Colin, Iain and Mary</i></p>
        //     </div>
        //     </div>
        //     <div class="input_output">

        //         <div class="input">
        //             < InputContainer />
        //         </div>
        //         <div class="output">
        //             < OutputContainer />
        //         </div>
        //     </div>
            <div>

            <UserSelect users={users} onSelectedUser={onSelectedUser} getForm={getNewUserForm}/>
           
            {newUserForm}

            {/* If we have selected a User, render their saved Output */}
            {selectedUser ? <Output user={selectedUser} removeUser={removeUser}/>: null}

            {selectedUser ?
                <div id='current_rendered_form'>
                    {carbonForm}
                </div>
             : null}
        </div>
    )
}

export default InputContainer;