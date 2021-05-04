import React, {useState} from "react";
import {newUser} from '../services/MainService';

const NewUser = ({addUser}) => {

    const [formUserData, setFormUserData] = useState({});

    const onChange = (e) => {
        formUserData[e.target.id] = e.target.value;
        setFormUserData(formUserData);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        formUserData['footprint'] = {
            commute : {
                car: null,
                train: null,
                bus: null,
                cycling: null,
                walk: null
            },
            air : null,
            diet: null,
            recycling: null,
            heating: null
        }
        newUser(formUserData).then((data) => addUser(data))

    };

    return(
        <div>
                <h2>Create a New User</h2>
            <form onSubmit={onSubmit} id='new_user_form'>
                <p>
                    <label>Username: </label>
                    <br></br>
                    <input onChange={onChange} type='text' name='username' id='username' required></input>
                </p>

                <p>
                    <label>First Name: </label>
                    <br></br>
                    <input onChange={onChange} type='text' name='forename' id='forename' required></input>
                </p>

                <p>
                    <label>Last Name: </label>
                    <br></br>
                    <input onChange={onChange} type='text' name='lastname' id='surname' required></input>
                </p>

                <input class="button" type='submit' value='Create User' id='createUser'></input>

            </form>
        
        </div>
    )
}

export default NewUser;