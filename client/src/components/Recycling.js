import React, {useState} from "react";
import {updateUser} from '../services/MainService.js'

const Recycling = ({figures, user, newData, getForm}) => {

    const [recyclingData, setRecyclingData] = useState(null);

    const onChange = (e) => {
        const recyclingData = e.target.value
        // Calculation to change recyclingData here
        setRecyclingData(recyclingData);
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
                <input onChange={onChange} type="radio" name="recycling_level" id="recycling_all" value={figures.recycling.always-recycled} required/>
                <label for="recycling_all">I recycle all of the time.</label>
                </p>
                <p>
                <input onChange={onChange} type="radio" name="recycling_level" id="recycling_most" value={figures.recycling.mostly-recycled} />
                <label for="recycling_most">I recycle most of the time.</label>
                </p>
                <p>
                <input onChange={onChange} type="radio" name="recycling_level" id="recycling_some" value={figures.recycling.some-recycled} />
                <label for="recycling_some">I recycle some of the time.</label>
                </p>
                <p>
                <input onChange={onChange} type="radio" name="recycling_level" id="recycling_none" value={figures.recycling.never-recycled} />
                <label for="recycling_none">I don't recycle anything.</label>
                </p>

                <input class="button" type="submit" value="Calculate" name="submit" />
                
            </form>
        </div>
        
    )

}
export default Recycling;