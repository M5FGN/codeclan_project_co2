import React from "react";

const UserSelect = ({users, onSelectedUser}) => {

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
        <h4>Select a user from the below list, or make a new account</h4>
            <select defaultValue='' onChange={handleSelect} name='userList'>
                {usersOptions}
            </select>
        </div>
    );
};

export default UserSelect;