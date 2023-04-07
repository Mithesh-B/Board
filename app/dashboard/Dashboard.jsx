
"use client";
import React from 'react'
import './dashboard.scss'
import Aside from './Aside'
import Search from './Search'
import Graph from './Graph'
import Footer from './Footer'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="left">
            <Aside/>
        </div>
        <div className="right">
            <Search/>
            <Graph/>
            <Footer/>
        </div>
    </div>
  )
}

export default Dashboard
