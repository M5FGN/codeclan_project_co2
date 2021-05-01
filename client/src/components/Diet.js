import React, {useState} from "react";

const Diet = ({user, putUser}) => {

    // Code here will be a post request?
        // OR A PUT REQUEST? Since we are updating a users inputs from the start?
    // Our result we want is user.footprint.diet = value
    // diet : 'value' is the key value pair
    // So our form data useState is going to be null for the value

    const [dietData, setDietData] = useState(null);

    const onChange = (e) => {
        dietData[e.target.id] = e.target.value;
        // This is where we need our calculator on what to do with the dietData
        // I.e. take this value, multiply by it by some value in our API
        // Then set the diet Data for user DB, to our final dietData

        // For now,
        setDietData(dietData);
        // This will currently set the dietData to a value with no key value pair
    }

    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     postUser(dietData).then((data) => {
    //         addUser(data);
    //     })
    // }


    // What we actually do with the data we have calculated as above
    const onSubmit = (e) => {
        e.preventDefault();
        putUser(dietData)
        .then( (diet) => {
            user.footprint.diet = diet
        })

        // onDietSubmit({
        //     diet: dietData
        // });
    }



    return (

        <div>

            <h2>Diet</h2>
            <h4>Choose the value which best describes your meat consumption ...</h4>
            
            <form id="diet_form" onSumbit={onSubmit}>

                {/* I have shoved in some values for now to test the submit */}
                <p><input onChange={onChange} type="radio" name="meat_level" id="meat_full" value="1000" />
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

                <input type="submit" value="Calculate" name="submit" />
    
    </form>

        </div>

    )
}

export default Diet;