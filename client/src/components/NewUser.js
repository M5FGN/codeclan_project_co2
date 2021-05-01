import React, {useState} from "react";
import {newUser} from '../services/MainService';

// The purpose of this is so the User can make an account
// This will then allow their saved data to be access, modified, deleted...

const NewUser = ({addUser}) => {

    // Implement useState, inital formData is empty object, which becomes our new user
    const [formData, setFormData] = useState({});

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
        // Set all fields to null initially;
    }

    const onSubmit = (e) => {
        e.preventDefault();
        newUser(formData).then((data) => addUser(data))
    }

    return(
        <div>
            <form onSubmit={onSubmit} id='new_user_form'>
                <p>
                    <label>Username: </label>
                    <input onChange={onChange} type='text' name='username' id='username'></input>
                </p>

                <p>
                    <label>First Name: </label>
                    <input onChange={onChange} type='text' name='forename' id='forename'></input>
                </p>

                <p>
                    <label>Last Name: </label>
                    <input onChange={onChange} type='text' name='lastname' id='surname'></input>
                </p>

                <input type='submit' value='Submit' id='submit'></input>

            </form>
        
        </div>
    )
}

export default NewUser;