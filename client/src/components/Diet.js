import React, {useState} from "react";
import {updateUser} from '../services/MainService.js'

const Diet = ({user, newData, getForm}) => {


    const [dietData, setDietData] = useState(null);

    const onChange = (e) => {
        const dietData = e.target.value
        // This is where we need our calculator on what to do with the dietData
        // I.e. take this value, multiply by it by some value in our API
        // Then set the diet Data for user DB, to our final dietData

        setDietData(dietData);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        user.footprint['diet'] = parseFloat(dietData);
        updateUser(user);
        newData(user);
        getForm('Travel', user);
        
    }


    return (

        <div>

            <h2>Diet</h2>
            
            <form id="diet_form" onSubmit={onSubmit}>
                <h4>Choose the value which best describes your meat consumption ...</h4>

                {/* I have shoved in some values for now to test the submit */}
                <p><input onChange={onChange} type="radio" name="meat_level" id="meat_full" value="1000" required/>
                    <label for="meat_full">I eat meat 7 days a week.</label>
                </p>
                <p>
                    <input onChange={onChange} type="radio" name="meat_level" id="meat_partial" value="600" />
                    <label for="meat_partial">I eat meat 4 - 6 days per week.</label>
                </p>
                <p>
                    <input onChange={onChange} type="radio" name="meat_level" id="meat_low" value="400" />
                    <label for="meat_low">I eat meat 1 - 3 days per week.</label>
                </p>
                <p>
                    <input onChange={onChange} type="radio" name="meat_level" id="meat_none" value="200" />
                    <label for="meat_none">I don't eat meat.</label>
                </p>

                <input class="button" type="submit" value="Calculate" name="submit" />        
    
    </form>

        </div>

    )
}

export default Diet;