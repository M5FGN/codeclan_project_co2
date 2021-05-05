import React, {useState} from "react";
import {updateUser} from '../services/MainService.js'

const Recycling = ({user, newData, getForm, figures}) => {

    const [recyclingData, setRecyclingData] = useState(null);

    const onChange = (e) => {
        // Value is already in kg CO2/y, no calc necessary
        setRecyclingData(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        user.footprint['recycling'] = parseFloat(recyclingData);
        updateUser(user)
        newData(user)
        getForm(null, null)
    }
    
    return (

        <div>
            <h2>Recycling</h2>
            
            <form id="recycling_form" onSubmit={onSubmit}>
                <h4>Choose the value which best describes your recycling activities ...</h4>
       
                <p>
                <input onChange={onChange} type="radio" name="recycling_level" id="recycling_all" value={figures.recycling.always_recycled} required/>
                <label for="recycling_all">I recycle all of the time.</label>
                </p>
                <p>
                <input onChange={onChange} type="radio" name="recycling_level" id="recycling_most" value={figures.recycling.mostly_recycled} />
                <label for="recycling_most">I recycle most of the time.</label>
                </p>
                <p>
                <input onChange={onChange} type="radio" name="recycling_level" id="recycling_some" value={figures.recycling.some_recycled} />
                <label for="recycling_some">I recycle some of the time.</label>
                </p>
                <p>
                <input onChange={onChange} type="radio" name="recycling_level" id="recycling_none" value={figures.recycling.never_recycled} />
                <label for="recycling_none">I don't recycle anything.</label>
                </p>

                <input class="button" type="submit" value="Calculate" name="submit" />
                
            </form>
        </div>
        
    )

}
export default Recycling;