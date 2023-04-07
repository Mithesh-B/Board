
"use client";
import React from 'react'
import './aside.scss'

const Aside = () => {
  return (
    <div className='aside'>
        <h1>Board.</h1>
        <div className="dash_left"><img src="\assets\dashboard_icon.png" alt="" /> Dashboard</div>
        <div className="transaction_left"><img src="\assets\transaction_icon.png" alt="" /> Transactions</div>
        <div className="schedule_left"><img src="\assets\schedule_icon.png" alt="" /> Schedules</div>
        <div className="users_left"><img src="\assets\user_icon.png" alt="" /> Users</div>
        <div className="settings_left"><img src="\assets\setting_icon.png" alt="" /> Settings</div>
        <div className="help">Help</div>
        <div className="contact">Contact Us</div>
    </div>
  )
}

export default Aside
