import React, {useState} from "react";

// The purpose of this is so the User can make an account
// This will then allow their saved data to be access, modified, deleted...

const NewUser = ({postUser}) => {

    // Implement useState, inital formData is empty object, which becomes our new user
    const [formData, setFormData] = useState({});

    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     postUser(formData).then((data) => {
    //         addUser(data);
    //     })
    // }

    // const [username, setUsername] = useState('');

    // const handleUsername = (e) => set

    const onSubmit = (e) => {
        e.preventDefault();
        postUser(formData)
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