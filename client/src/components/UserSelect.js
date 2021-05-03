import React from "react";

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
                <p> A user account is needed to use this calculator ... </p> 
                <h4>Select an existing User ... </h4>
            <select defaultValue='' onChange={handleSelect} name='userList'>
                {/* Set our default select to an empty one, else you can't click on first user to render */}
                <option value='' defaultValue='selected'>Select a user</option>
                {usersOptions}
            </select>
        
                <h4>Or create a New User ... </h4>
                <button class="button" type='submit' value='Create Account' onClick={() => {getForm(true)}}>Create New User</button>
            </div>

        </div>
    );
};

export default UserSelect;