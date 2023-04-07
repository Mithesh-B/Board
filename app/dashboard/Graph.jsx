
"use client";
import React, {useState} from 'react'
import './graph.scss' 

//implement chart.js for line graph
import { Line } from 'react-chartjs-2';
//chart tools
import {Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, //y axis
  PointElement
} from 'chart.js'

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale, 
  PointElement
)

const Graph = () => {

//shows and hides dataset onclick
  const [visibleDatasets, setVisibleDatasets] = useState(['guest', 'user']);

  const handleDatasetClick = (datasetLabel) => {
    if (visibleDatasets.includes(datasetLabel)) {
      setVisibleDatasets(visibleDatasets.filter(label => label !== datasetLabel));
    } else {
      setVisibleDatasets([...visibleDatasets, datasetLabel]);
    }
  };

  //chart.js parameters

  const guest={
    labels: 'guest',
    data: [200,300,150,400,300,250],
    borderColor: '#E9A0A0',
    borderWidth: 1.5 ,
    pointBorderColor: 'black',
    tension: 0.4,
    hidden: !visibleDatasets.includes('guest')
  }
  const user={
    labels: 'user',
    data: [400,100,350,250,300,400],
    borderColor: '#9BDD7C',
    borderWidth: 1.5 ,
    pointBorderColor: 'black',
    tension: 0.4,
    hidden: !visibleDatasets.includes('user')
  }

  const data ={
    labels: [ '','Week 1', 'Week 2', 'Week 3', 'Week 4', ''],
    datasets: [guest , user]
  };
//chart.js options
  const options ={
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min:0,
        max:500,
        
        ticks: {
          font: {
              family: 'Lato',
              size: 14,
          },
      },
      },
      x: {
        grid: {
          display: false,
       },
       ticks: {
        font: {
            family: 'Lato', // Your font family
            size: 14,
        },
    },
     },
      
    }
  }

  
  return (
    <div className='graph'>
      <div className="activities">
        <h2 className='graph_title'>Activities</h2>
        <div className='chart_subname'>
          <div>May - June 2021 <img src="/assets/arrowdown.png" alt="" /></div>
          <div className='graph_left'>
            <div onClick={() => handleDatasetClick('guest')} className='graph_left1'><img src="/assets/line1.png" alt="" />Guest</div>
            <div onClick={() => handleDatasetClick('user')}className='graph_left2'><img src="/assets/line2.png" alt="" />User</div>
          </div>
      </div>
        <div className='line'>
        <Line 
          options={options}
          data={data}
        />
        </div>
      </div>
      
    </div>
  )
}

export default Graph
