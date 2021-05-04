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
        const totalCarbonData = [
            user.footprint.diet,
            user.footprint.air,
            user.footprint.heating,
            user.footprint.recycling,
            user.footprint.commute.travelTotal
        ];
        let total = 0;
        for (let val of totalCarbonData){
            // If value IS a number, AND value is NOT null
            if (!isNaN(val) === true && val !== null){
                total = total + val;
            }
        }
        setTotalCarbon(total);
    };
    
    // For each user in users
        // const totalDiet = 
    let averageData = [];
    let averageTotal = 0;

    const averageCalc = () => {
        const len = users.length;

        let totDiet = 0;
        let totTravel = 0;
        let totAir = 0;
        let totHeating = 0;
        let totRecycling = 0;

        for (let user of users){

            let diet = user.footprint.diet;
            let travel = user.footprint.commute.travelTotal;
            let air = user.footprint.air;
            let heating = user.footprint.heating;
            let recycling = user.footprint.recycling;

            if (diet !== null){
                totDiet += diet;
            };
            if (travel !== null){
                totTravel += travel;
            };
            if (air !== null){
                totAir += air;
            };
            if (heating !== null){
                totHeating += heating;
            };
            if (recycling !== null){
                totRecycling += recycling;
            };
        }
        const avgDiet = parseInt(totDiet / len);
        const avgTravel = parseInt(totTravel / len);
        const avgAir = parseInt(totAir / len);
        const avgHeating = parseInt(totHeating / len);
        const avgRecycling = parseInt(totRecycling / len);

        averageData = [avgDiet, avgTravel, avgAir, avgHeating, avgRecycling];
        
        for (let val of averageData){
            averageTotal += val;
        }
      
    }
    
    averageCalc()


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