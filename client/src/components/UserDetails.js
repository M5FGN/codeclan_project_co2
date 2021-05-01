import React from "react";

const UserDetails = () => {

return (

    <div>
        <h2>Your Details</h2>
        <form id="user_details_form">
            <h4>Add Your Details ...</h4>
            <p>
            <label for="username">User Name</label>
            <input type="text" name="username" id="username" />
        </p>
        <p>
            <label for="forename">First Name</label>
            <input type="text" name="forename" id="forename" />
        </p>
        <p>
            <label for="surname">Last Name</label>
            <input type="text" name="surname" id="surname" />
        </p>
        <input type="submit" value="Save" name="submit" />
            
        </form>    

    </div>

)

}

export default UserDetails;