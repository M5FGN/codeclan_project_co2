import React, {useState, useEffect} from 'react';
import {getUsers} from '../services/MainService.js'
import InputContainer from '../components/InputContainer.js';
import OutputContainer from '../components/OutputContainer.js';
import './main.css';
import Logo from '../components/Logo.jpg';

const Main = () => {

    const [users, setUsers] = useState([]);
    const [totalCarbon, setTotalCarbon] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        getUsers().then(allUsers => setUsers(allUsers));
    },[]);
  
    // Calculate the total carbon data of a given user
    const totalCarbonCalc = (user) => {
        const d = user.footprint;
        const totalCarbonData = [d.diet, d.air, d.heating, d.recycling, d.commute.travelTotal];
        let total = 0;
        for (let val of totalCarbonData){
            if (!isNaN(val) === true && val !== null){
                total = total + val;
            }
        }
        setTotalCarbon(total);
    };


    // averageData and averageTotal are passed down to the output for rendering our chart and comparisons.
    // averageData is an array, with each point in the array being the average for ALL users e.g. average diet, average recycling carbon
    // All units at this point are already in kgCO2/year
    let averageData = [];
    let averageTotal = 0;

    const averageCalc = () => {

        // Length of the users that we have set with useEffect line 14, and setState line 10
        // Needed for calculating the average, from the total of all users
        const len = users.length;

        // An array that will store the running total of a proprety e.g. diet, for ALL users
        // Must be 0,0.. to avoid index issues, as the secind for loop uses index, so it feets into output okay
        // Order in the array is [diet, commute.travelTotal, air, heating, recycling]
        let totalsArray = [0,0,0,0,0]

        // For each user in our Users
        for (let user of users){

            // Shortcut to avoid typing user.footprint every time
            const d = user.footprint;

            // Set an array of all user data for each user, from the database
            const userData = [d.diet, d.commute.travelTotal, d.air, d.heating, d.recycling]

            // A for loop with i being the index number, since we use this to manipulate our totalsArray
            // Starting at index = 0, and so long as index is < user.data array length            
            for (let i=0; i<userData.length; i++){
                
                // if the userData at index i is NOT null i.e. it has data (for example, if d.diet equals 100, this will run, and if it equals null, it will not)

                if (userData[i] !== null){

                    // Set the totalsArray at index i, to the current value it has, plus the new user value
                    // E.g. if totalsArray currently equals [100,130,20,2,5], where 100 is our first loop d.diet from user1, 
                        // on second loop we add user2's diet entry of say, 50, so totalsArray is now [150,130,20,2,5]
                    totalsArray[i] += userData[i]
                };
                // i++ will then add one to the index number, and the loop will continue, this time on d.commute.travelTotal
                // And so on
            };
            // Now move onto the next user, and repeat ALL of the above from const d = user.footprint
        }; 
        // our totalsArray now includes the sum of all carbon emission properties, for all users
        // We want to divide each property in the totalsArray, by the number of users, calculated  from 'const len = users.length'
        // Then using a map loop, to go through each value in the array, and carry out the above

        averageData = totalsArray.map(val => val/len);
        // out global scope averageData is now updated with this new array.
        

        // And a small loop, for looping through the averageData array, adding them all together, to our averageTotal
        let runTotal = 0;
        for (let val of averageData){
            runTotal += val;
        }
        averageTotal = parseInt(runTotal);
    };
    averageCalc();


    return(
        <div class="main">
            <div class="white">
                <div class="header">
                <div class="logo"><img class="logo_img" src= {Logo} alt="ProjectCO2 Logo"></img></div>
            {/* <p class="logo_text">PROJECT CO2</p> */}
            {/* <div><FontAwesomeIcon icon={faPaw} /></div> */}
            <div class="header_text">
            <h2>Carbon Foot Print Calculator</h2>
            <p>Created by Colin, Iain and Mary</p>
            </div>
            </div>
            <div class="input_output">

                <div class="input">
                    < InputContainer totalCarbonCalc={totalCarbonCalc} users={users} setUsers={setUsers} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
                </div>
                
                {selectedUser !== null ? <div class="output">< OutputContainer user={selectedUser} totalCarbon={totalCarbon} averageData={averageData} averageTotal={averageTotal}/> </div>:null}
                
            </div>

        </div>
        </div>
    )
}

export default Main;