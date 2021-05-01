import React, {useState} from "react";

// The purpose of this is so the User can make an account
// This will then allow their saved data to be access, modified, deleted...

const NewUser = ({postUser, addUser}) => {

    // Implement useState, inital formData is empty object, which becomes our new user
    const [formData, setFormData] = useState({});

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        postUser(formData).then((data) => {
            addUser(data);
        })
    }

    return(
        <div>
            <form onSubmit={onSubmit} id='new_user_form'>
                <p>
                    <label>Username: </label>
                    <input onChange={onChange} type='text' name='username' id='new_username'></input>
                </p>

                <p>
                    <label>First Name: </label>
                    <input onChange={onChange} type='text' name='forename' id='new_forename'></input>
                </p>

                <p>
                    <label>Last Name: </label>
                    <input onChange={onChange} type='text' name='lastname' id='new_surname'></input>
                </p>

                <input type='submit' value='Submit' id='submit'></input>

            </form>
        
        </div>
    )
}

export default NewUser;