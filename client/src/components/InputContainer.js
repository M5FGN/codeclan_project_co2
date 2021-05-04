import React, {useState, useEffect} from 'react';
import UserSelect from '../components/UserSelect.js';
import NewUser from '../components/NewUser.js';
import Diet from '../components/Diet.js';
import Travel from '../components/Travel.js';
import Flights from '../components/Flights.js';
import Heating from '../components/Heating.js';
import Recycling from '../components/Recycling.js';
import {deleteUser} from '../services/MainService.js';
import {getFigures} from '../services/MainService.js'


const InputContainer = ({users, totalCarbonCalc, setUsers, selectedUser, setSelectedUser}) => {
    const [figures, setFigures] = useState([]);
    const [newUserForm, setNewUserForm] = useState(null);
    const [carbonForm, setForm] = useState(null);


    useEffect(() => {
        getFigures()
        .then(figures => setFigures(figures[0].emission_sources))
      }, []);

    // Takes in our selected user, and sets selected user state
    // Also sets the dietForm to render the Diet.js
    const onSelectedUser = (user) => {
        setSelectedUser(user);
        getForm('Diet', user);
        totalCarbonCalc(user);
        getNewUserForm(false);
        console.log(figures);
    };

    // Update users list locally when we add a new user
    const addUser = (newUser) => {
        const temp = users.map(s=>s);
        temp.push(newUser);
        setUsers(temp);
        getNewUserForm(false);
        onSelectedUser(newUser);
    };

    // Remove user locally
    const removeUser = (id) => {
        setUsers(users.filter(user => user._id !== id))
        // The above will loop through each one and filter out where id doesn't match
        // Alternatively we can splice it and return new list
        setSelectedUser(null);
    };

    // Update user locally after we add new data
    const updateNewData = updatedUser => {
        const updatedUserIndex = users.findIndex(user => user._id === updatedUser._id);
        const updatedUsers = [...users];
        updatedUsers[updatedUserIndex] = updatedUser;
        setUsers(updatedUsers);
        // Update the running carbon total
        totalCarbonCalc(updatedUser);
    };

    // Sets the state of the current form to be displayed
    const getForm = (form, user) => {
        if (form === 'Diet'){
            setForm(<Diet user={user} newData={updateNewData} getForm={getForm} figures={figures}/>)
        };
        if (form === 'Travel'){
            setForm(<Travel user={user} newData={updateNewData} getForm={getForm} figures={figures}/>)
        };
        if (form === 'Flights'){
            setForm(<Flights user={user} newData={updateNewData} getForm={getForm} figures={figures}/>)
        };
        if (form === 'Heating'){
            setForm(<Heating user={user} newData={updateNewData} getForm={getForm} figures={figures}/>)
        };
        if (form === 'Recycling'){
            setForm(<Recycling user={user} newData={updateNewData} getForm={getForm} figures={figures}/>)
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

    const handleRemove = (user) => {
        deleteUser(user._id);
        removeUser(user._id);
    };
   
    return(
       
            <div>

            {selectedUser === null ? <UserSelect users={users} onSelectedUser={onSelectedUser} getForm={getNewUserForm}/>: null}
           
            {newUserForm}

            {selectedUser ?
                <div id='current_rendered_form'>
                    {carbonForm}
                </div>
             : null}

             {selectedUser ? 
                <div>
                    <h4 id="rtnHome">Return to Home page</h4>
                    <p>Return to the Home Page to Log In as a different user ...</p>
                    <button id="returnbtn" class="button" type='submit' onClick={() => {setSelectedUser(null)}}>Return to Home</button>
                </div>
                :null }

            {selectedUser ?
                <div>
                    <h4 id="delUser">Delete your User Account</h4>
                    <p>To remove your account, click 'Remove Account' ...</p>
                    <button id="deletebtn" class="button" type='submit' onClick={() => {handleRemove(selectedUser)}}>Remove Account</button>
                </div>
                :null}
        </div>
    )
}

export default InputContainer;