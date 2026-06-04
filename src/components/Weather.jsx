import React, { useState } from 'react'
import './Weather.css'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const Weather = () => {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchWeather = async () => {
    if (!city.trim()) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
      if (!res.ok) throw new Error('City not found')
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setError(err.message)
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='weather'>
      <div className='Search-bar'>
        <input
          type="text"
          placeholder='Enter city name'
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
        />
        <button onClick={fetchWeather} className='search-btn'>🔍</button>
      </div>

      {loading && <p className='status'>Loading...</p>}
      {error && <p className='error'>{error}</p>}

      {weather && (
        <div className='weather-info'>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p className='temp'>{Math.round(weather.main.temp)}°C</p>
          <p className='condition'>{weather.weather[0].description}</p>
          <div className='details'>
            <span>💧 Humidity: {weather.main.humidity}%</span>
            <span>💨 Wind: {weather.wind.speed} m/s</span>
            <span>🌡️ Feels like: {Math.round(weather.main.feels_like)}°C</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Weather
