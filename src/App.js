// Start by running npx create-react-app bargraph-chartjs-demo in terminal

import './App.css';

// Documentation: https://www.chartjs.org/docs/latest/getting-started/integration.html
// For a bar graph:
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';

// part of a new feature from react-chartjs version 4: registering all stuff that was imported
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)


function App() {
  // Make the chart using hooks:
  // assign one useState variable for chart data
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  
  // assign other useState variable for chart options
  const [chartOptions, setChartOptions] = useState({});
 
  // useEffect to create all the data points we need
  useEffect(() => {
    setChartData({
      labels: ['John', 'Kevin', 'George', 'Michael', 'Oreo'],
      datasets: [
        {
          label: 'Votes for person who let the dogs out',
          data: [12, 55, 34, 120, 720], // 12 votes for John, 55 for Kevin, 34 for George, 120 for Michael, 720 for Oreo
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.4)',
        }
      ]
    });
    setChartOptions({
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Who let the dogs out'
        }
      }
    })
  }, [])

  return (
    <div className="App">
      <Bar options={chartOptions} data={chartData} />
    </div>
  );
}

export default App;
