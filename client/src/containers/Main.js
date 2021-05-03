import React, {useState, useEffect} from 'react';
import {getUsers} from '../services/MainService.js'
import InputContainer from '../components/InputContainer.js';
import OutputContainer from '../components/OutputContainer.js';
import './main.css';
import Logo from '../components/Logo.jpg';
import {getFigures} from '../services/MainService.js'

const Main = () => {
    
    const [figures, setFigures]=useState([])
    const [users, setUsers] = useState([]);
    const [totalCarbon, setTotalCarbon] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        getUsers().then(allUsers => setUsers(allUsers));
    },[]);
    useEffect(() => {
      getFigures()
      .then(figures => setFigures(figures.Emission-Sources))
    }, []);



    // Calculate the total carbon data of a given user
    const totalCarbonCalc = (user) => {
        const totalCarbonData = [
            user.footprint.diet,
            user.footprint.air,
            user.footprint.heating,
            user.footprint.recycling,
            user.footprint.commute.car,
            user.footprint.commute.train,
            user.footprint.commute.bus,
            user.footprint.commute.cycling,
            user.footprint.commute.walk
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
                    < InputContainer figures = {figures} totalCarbonCalc={totalCarbonCalc} users={users} setUsers={setUsers} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
                </div>
                <div class="output">
                    {selectedUser !== null ? < OutputContainer user={selectedUser} totalCarbon={totalCarbon}/> :null}
                </div>
            </div>

        </div>
        </div>
    )
}

export default Main;