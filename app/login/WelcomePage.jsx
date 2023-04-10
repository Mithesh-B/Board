"use client";
import React from 'react'
import './welcomePage.scss'
import Login from './Login'

const WelcomePage = () => {
  return (
    <div className='welcome'>
      <div className="left">
        <h1 className='logo'>Board.</h1>
      </div>
      <div className="right">
        <Login/>
      </div>
    </div>
  )
}

export default WelcomePage
