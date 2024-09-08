import React from 'react';
import './WeatherInfo.css';

const WeatherInfo = () => {
    return (
        <div className="weather-info">
            <div className="weather-icon">
                <img src="./weathers.png" alt="Weather Icon" />
            </div>
            <div className="weather-details">
                <h4>Mostly Sunny..!</h4>
                <p>22°C Kuttanad</p>
                <p>Humidity: 33%</p>
                <p>Wind Speed: 7.70Km/h</p>
            </div>
        </div>
    );
};

export default WeatherInfo;
