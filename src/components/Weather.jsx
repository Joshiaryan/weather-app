import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'

const Weather = () => {
  return (
    <div className='weather'>
        <div className='Search-bar '>
            <input type="text" placeholder='Enter city name' />
            <button><img src={search_icon} alt="search" /></button>
        </div>
    </div>
  )
}

export default Weather
