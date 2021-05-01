import React, {useState} from "react";
import NewUser from './NewUser.js'

const UserSelect = ({users, onSelectedUser, getForm}) => {

    // Grabs our users, maps and renders the user name of each one, so a user can click to see their data
    const usersOptions = users.map((user, index) => {
        return <option value={index} key={index}>{user.username}</option>
    });
    
    // When we click on a user, takes in the event, sets chosen User:
    const handleSelect = (event) => {
        const chosenUser = users[event.target.value];
        onSelectedUser(chosenUser);
    };

    return(
        <div>
            <div>
                <p> You must have a user account to view data and add your own </p> 
                <p> Click from your account on the list below, or click 'Create Account'  </p>
                <button type='submit' value='Create Account' onClick={() => getForm()}>Create Account</button>
            </div>

            <select defaultValue='' onChange={handleSelect} name='userList'>
                {/* Set our default select to an empty one, else you can't click on first user to render */}
                <option value='' defaultValue='selected'>Select a user</option>
                {usersOptions}
            </select>
        </div>
    );
};

export default UserSelect;