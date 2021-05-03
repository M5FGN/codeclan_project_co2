// import React from "react";

// const Chart = () => {

//     return (
//         <div> 
//             This is where the chart will go.
//         </div>
//     )

// }
// export default Chart;


// import React from 'react'
// import { render } from 'react-dom'
// import Highcharts from 'highcharts'
// import HighchartsReact from 'highcharts-react-official'
 
// const options = {
//     chart: {
//       plotBackgroundColor: null,
//       plotBorderWidth: 0,
//       plotShadow: false
//     },
//     title: {
//       text: 'Your<br>Carbon<br>Foot Print',
//       align: 'center',
//       verticalAlign: 'middle',
//       y: 60
//     },
//     tooltip: {
//       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
//     },
//     accessibility: {
//       point: {
//         valueSuffix: '%'
//       }
//     },
//     plotOptions: {
//       pie: {
//         dataLabels: {
//           enabled: true,
//           distance: -50,
//           style: {
//             fontWeight: 'bold',
//             color: 'white'
//           }
//         },
//         startAngle: -90,
//         endAngle: 90,
//         center: ['50%', '75%'],
//         size: '110%'
//       }
//     },
//     series: [{
//       type: 'pie',
//       name: '.. of Total Footprint.',
//       innerSize: '50%',
//       data: [
//         ['Diet', 20],
//         ['Travel', 20],
//         ['Flights', 20],
//         ['Heating', 20],
//         ['Recycling', 20],
//       ]
//     }]
//   }
 
// const Chart = () => <div>
//   <HighchartsReact
//     highcharts={Highcharts}
//     options={options}
//   />
// </div>
 
// render(<Chart />, document.getElementById('root'))
// export default Chart;