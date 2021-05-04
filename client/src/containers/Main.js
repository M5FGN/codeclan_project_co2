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

    let averageData = [];
    let averageTotal = 0;

    const averageCalc = () => {

        const len = users.length;

        // Must be 0,0.. to avoid index issues
        let totalsArray = [0,0,0,0,0]

        for (let user of users){
            const d = user.footprint;
            const userData = [d.diet, d.commute.travelTotal, d.air, d.heating, d.recycling]

            for (let i=0; i<userData.length; i++){
                if (userData[i] !== null){
                    totalsArray[i] += userData[i]
                };
            };
        }; 

        averageData = totalsArray.map(val => val/len);
        console.log(averageData)
        
        for (let val of averageData){
            averageTotal += val;
        }
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