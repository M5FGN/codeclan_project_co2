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
                walk: null,
                travelTotal: null
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
                    <input onChange={onChange} type='text' name='username'  data-testid='username' id='username' required></input>
                </p>

                <p>
                    <label>First Name: </label>
                    <br></br>
                    <input onChange={onChange} type='text' name='forename' data-testid='firstname' id='forename' required></input>
                </p>

                <p>
                    <label>Last Name: </label>
                    <br></br>
                    <input onChange={onChange} type='text' name='lastname' data-testid='surname' id='surname' required></input>
                </p>

                <input className="button" type='submit' value='Create User' data-testid= 'button'id='createUser'></input>

            


            </form>
        
        </div>
    )
}

export default NewUser;