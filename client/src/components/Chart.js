// import React from "react";

// const Chart = () => {

//     return (
//         <div> 
//             This is where the chart will go.
//         </div>
//     )

// }
// export default Chart;


import React from 'react'
import { render } from 'react-dom'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

// Code to be changed

// For a new User the Initial State of Data and Title should show the Average CO2 Footprint - prepopulate list as below (with correct numbers)
// Once a new user adds Diet the list should delete all other elements and only show Diet, for each form the user completes a new line 
        //should be added to the list with the relevant key and value.

// For an Existing User the List should populate with the figures they have entered previously then update as they change the numbers. - DONE
        //The title should be "Your Carbon Footprint" - DONE (ish. Only renders if we have a user)
 
const Chart = ({user}) => 
{
  const diet = user.footprint.diet;
  const air = user.footprint.air;
  const heating = user.footprint.heating;
  const recycling = user.footprint.recycling;
  const car = user.footprint.commute.car;
  const travelTotal = user.footprint.commute.travelTotal;

  
  let title = '';
  const chooseTitle = () => {
    // If diet is null, this means there is no user data yet. So render the average
    // If diet is not null, this means we have some user data, so render their personal chart
    if (diet !== null){
      title = 'Your <br> Carbon <br> Footprint'
    };
    if (diet === null){
      title = 'Average <br> Carbon <br> Footprint'
    };
  }
  chooseTitle()


  const data = [
    ['Diet', diet],
    ['Travel', car], // This will need changed to travelTotal once my pull has been merged
    ['Flights', air],
    ['Heating', heating],
    ['Recycling', recycling]
  ];

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: 0,
      plotShadow: false
    },
    title: {
      text: title,
      align: 'center',
      verticalAlign: 'middle',
      y: 60
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          distance: -50,
          style: {
            fontWeight: 'bold',
            color: 'white'
          }
        },
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '75%'],
        size: '110%'
      }
    },
    series: [{
      type: 'pie',
      name: '.. of Total Footprint.',
      innerSize: '50%',
      data: data
    }]
  }

  return (
    <div>
      <HighchartsReact
      highcharts={Highcharts}
      options={options}
      />
    </div>
    )
  }
 
// render(<Chart />, document.getElementById('root'))
export default Chart;