import React, {useState} from "react";
import {updateUser} from '../services/MainService.js'

const Diet = ({user, newData, getForm, figures}) => {


    const [dietData, setDietData] = useState(null);

    const onChange = (e) => {
        // Grab value from selection (units kg CO2/week) and multiply by 52 weeks/year
        setDietData(e.target.value*52);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        user.footprint['diet'] = parseFloat(dietData);
        updateUser(user);
        newData(user);
        getForm('Travel', user);
        
    }

    const apiData = figures.meat

    return (

        <div>

            <h2>Diet</h2>
            
            <form id="diet_form" onSubmit={onSubmit}>
                <h4>Choose the value which best describes your meat consumption ...</h4>

                <p><input onChange={onChange} type="radio" name="meat_level" id="meat_full" value={apiData.meat7} required/>
                    <label for="meat_full">I eat meat 7 days a week.</label>
                </p>
                <p>
                    <input onChange={onChange} type="radio" name="meat_level" id="meat_partial" value={apiData.meat5} />
                    <label for="meat_partial">I eat meat 4 - 6 days per week.</label>
                </p>
                <p>
                    <input onChange={onChange} type="radio" name="meat_level" id="meat_low" value={apiData.meat3} />
                    <label for="meat_low">I eat meat 1 - 3 days per week.</label>
                </p>
                <p>
                    <input onChange={onChange} type="radio" name="meat_level" id="meat_none" value={apiData.meat} />
                    <label for="meat_none">I don't eat meat.</label>
                </p>

                <input class="button" type="submit" value="Calculate" name="submit" id="dietCalculate" />        
    
    </form>

        </div>

    )
}

export default Diet;