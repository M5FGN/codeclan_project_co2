import React from "react";

const Recycling = () => {

    return (

        <div>
            <h2>Recycling</h2>
            
            <form id="recycling_form">
                <h4>Choose the value which best describes your recycling activities ...</h4>
       
                <p>
                <input type="radio" name="recycling_level" id="recycling_all" value="" />
                <label for="recycling_all">I recycle all of the time.</label>
                </p>
                <p>
                <input type="radio" name="recycling_level" id="recycling_most" value="" />
                <label for="recycling_most">I recycle most of the time.</label>
                </p>
                <p>
                <input type="radio" name="recycling_level" id="recycling_some" value="" />
                <label for="recycling_some">I recycle some of the time.</label>
                </p>
                <p>
                <input type="radio" name="recycling_level" id="recycling_none" value="" />
                <label for="recycling_none">I don't recycle anything.</label>
                </p>

                <input type="submit" value="Calculate" name="submit" />
                
            </form>
        </div>
        
    )

}
export default Recycling;