import React from 'react'
import './Weather.css'
import search from '../assets/search.png'

const Weather = () => {
  return (
    <div className='weather'>
        <div className='Search-bar '>
            <input type="text" placeholder='Enter city name' />
            
            <img src={search} alt="search" />
        </div>
    </div>
  )
}

export default Weather
