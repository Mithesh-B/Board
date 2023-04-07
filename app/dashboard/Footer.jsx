
"use client";
import React from 'react'
import './footer.scss'
import {Chart as ChartJS,
  ArcElement,
  Tooltip,
  PieController
} from 'chart.js'
// implemented chart.js for pie chart
import { Pie } from 'react-chartjs-2';


ChartJS.register(
ArcElement,
Tooltip,
)


const Footer = () => {
  //chart.js parameters 
  const data ={
    labels: [ 'Custom Short Pants', 'Basic Tees', 'Super Hoodies',],
    datasets: [
      {
        data: [31,55,14],
        backgroundColor: ['#F6DC7D','#98D89E', '#EE8484']
      }
    ]
  };

  const options ={

  }

  return (
    <div className='footer'>
    <div className="footer_left">
      <div className='footer_top'>
        <h2>Top products</h2>
        <div>May - June 2021<img src="\assets\arrowdown.png" alt="" /></div>
      </div>
      <div className='pie' >
          <Pie
            data = {data}
            options={options}>
          </Pie>
          <div className='pie_content'>
            <div className='pie_1'>
              <div className='pie_title'><img src="/assets/pie1.png" alt="" />Basic Tees</div>
              <div className='pie_percent'>55%</div>
            </div>
            <div className='pie_2'>
              <div className='pie_title'><img src="/assets/pie2.png" alt="" />Custom Short Pants</div>
              <div className='pie_percent'>31%</div>
            </div>
            <div className='pie_3'>
              <div className='pie_title'><img src="/assets/pie3.png" alt="" />Super Hoodies</div>
              <div className='pie_percent'>14%</div>
            </div>
            
          </div>
        </div>
    </div>
    <div className="footer_right">
      <div className='footer_top'>
        <h2>Today’s schedule</h2>
        <div>See All <img src="\assets\arrow.png" alt="" /></div>
      </div>
      <div className="footer_content">
        <div className='content1'>
          <h3>Meeting with suppliers from Kuta Bali</h3>
          <div>14.00-15.00</div>
          <div>at Sunset Road, Kuta, Bali </div>
        </div>
        <div className='content2'>
          <h3>Check operation at Giga Factory 1</h3>
          <div>18.00-20.00</div>
          <div>at Central Jakarta </div>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default Footer
