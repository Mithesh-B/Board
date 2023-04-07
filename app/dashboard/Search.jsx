
"use client";
import React, { useState, useEffect } from 'react';
import './search.scss'
import axios from 'axios';

const Search = () => {


  const [data, setData] = useState('fetching');
  const [error, setError] = useState(null);



  //async function to fetch dummy data from API and display on dashboard using axios

  useEffect(() => {
    axios.get('https://random-data-api.com/api/v2/banks')
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        if (error.response) {
          setError(`Error status: ${error.response.status}. Error message: ${error.response.data.message}`);
        } else if (error.request) {
          setError('No response received from server');
        } else {
          setError(`Error message: ${error.message}`);
        }
      });
  }, []);





  return (
    <div className='search'>
      <div className="top">
        <div className='top_search'>
          <h2>Dashboard</h2>
        </div>
          <div className='profile'>
              <div className='searchlogo'><input type="text"  placeholder='Search...'/><img className='searchIcon' src="\assets\Search icon.png" alt="" /></div>
              <img className='bell' src="\assets\Vector.png" alt="notifications" />
              <img className='profilePic' src="\assets\image 1.png" alt="profile" />
          </div>
      </div>
      <div className="bottom">
        <div className="card1">
          <div className="icon"><img src="\assets\revenue.png" alt="" /></div>
          <div className="card1_content">
            <div className='revenue'>Total Revenues</div>
            <div className="revenue_value">{data && data.id ? (data.id*878).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }) : "fetching"}</div>
          </div>
        </div>
        <div className="card2">
        <div className="icon"><img src="\assets\transaction.png" alt="" /></div>
          <div className="card2_content">
            <div className='transaction'>Total Transactions</div>
            <div className="transaction_value">{data && data.id ? (data.id*378).toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0  }) : "fetching"}</div>
          </div>
        </div>
        <div className="card3">
        <div className="icon"><img src="\assets\like.png" alt="" /></div>
          <div className="card3_content">
            <div className='likes'>Total Likes</div>
            <div className="likes_value">{data && data.id ? (data.id*18).toLocaleString("en-IN") : "fetching"}</div>
          </div>
        </div>
        <div className="card4">
        <div className="icon"><img src="\assets\user.png" alt="" /></div>
          <div className="card4_content">
            <div className='users'>Total Users</div>
            <div className="users_value">{data && data.id ? (data.id).toLocaleString("en-IN") : "fetching"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
