import React, {useState} from "react";
import NewUser from './NewUser.js'

const UserSelect = ({users, onSelectedUser}) => {

    // Set up a state so we can render our form when we want it
    const [newUserForm, setForm] = useState(null);

    // Grabs our users, maps and renders the user name of each one, so a user can click to see their data
    const usersOptions = users.map((user, index) => {
        return <option value={index} key={index}>{user.username}</option>
    });
    
    // When we click on a user, takes in the event, sets chosen User:
    const handleSelect = (event) => {
        const chosenUser = users[event.target.value];
        onSelectedUser(chosenUser);
    };

    // Function from the button onClick. It will set the form to our NewUser form
    const getForm= () => {
        setForm(<NewUser/>)
    };



    return(
        <div>
            <div>
                <p> You must have a user account to view data and add your own </p> 
                <p> Click from your account on the list below, or click 'Create Account'  </p>
                    {/* The purpose of this is so we have some ability to save user data to our DB, to grab it for rendering or comparing */}
                <button type='submit' value='Create Account' onClick={getForm}>Create Account</button>
                {newUserForm}
               
            </div>

            {/* A line break just to tidy it up whilst trialling */}
            <br></br>

            <select defaultValue='' onChange={handleSelect} name='userList'>
                {/* Set our default select to an empty one, else you can't click on first user to render */}
                <option value='' defaultValue='selected'>Select a user</option>
                {usersOptions}
            </select>
        </div>
    );
};

export default UserSelect;