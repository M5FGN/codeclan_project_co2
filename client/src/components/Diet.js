import React from "react";

const Diet = () => {

    return (

        <div>

            <h2>Diet</h2>
            
            <form id="diet_form">
                <h4>Choose the value which best describes your meat consumption ...</h4>

                <p><input type="radio" name="meat_level" id="meat_full" value="" />
                    <label for="meat_full">I eat meat 7 days a week.</label>
                </p>
                <p>
                    <input type="radio" name="meat_level" id="meat_partial" value="" />
                    <label for="meat_partial">I eat meat 4 - 6 days per week.</label>
                </p>
                <p>
                    <input type="radio" name="meat_level" id="meat_low" value="" />
                    <label for="meat_low">I eat meat 1 - 3 days per week.</label>
                </p>
                <p>
                    <input type="radio" name="meat_level" id="meat_none" value="" />
                    <label for="meat_none">I don't eat meat.</label>
                </p>

                <input type="submit" value="Calculate" name="submit" />
    
    </form>

        </div>

    )
}

export default Diet;