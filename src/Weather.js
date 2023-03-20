import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png",
      date: "Monday 17:00",
      humidity: response.data.main.humidity,
      rain: response.data.main.rain,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather grid-container">
        <div className="main-container">
          <div className="grid-item main">
            <form>
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="form-search"
              />
              <input type="submit" value="🔍" className="search-btn" />
            </form>
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="main-img"
            />
            <div>
              <p className="temp">
                <span>{Math.round(weatherData.temperature)}</span>
                <span>℃</span>
              </p>
              <p className="day">{weatherData.date}</p>
              <hr />
              <p className="weather-description text-capitalize">
                {weatherData.description}
              </p>
              <p className="city">{weatherData.city}</p>
            </div>
          </div>
        </div>
        <div className="grid-item forecast">
          <div className="flex-container">
            <div className="flex-item flex-item1">
              <p>Sun</p>
              <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
              <p className="temp">15°- 3°</p>
            </div>
            <div className="flex-item flex-item2">
              <p>Sun</p>
              <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />

              <p className="temp">15°- 3°</p>
            </div>
            <div className="flex-item flex-item3">
              <p>Sun</p>
              <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
              <p className="temp">15°- 3°</p>
            </div>
            <div className="flex-item flex-item4">
              <p>Sun</p>
              <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
              <p className="temp">15°- 3°</p>
            </div>
            <div className="flex-item flex-item5">
              <p>Sun</p>
              <img src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png" />
              <p className="temp">15°- 3°</p>
            </div>
          </div>
        </div>

        <div className="grid-item highlights">
          <div className="flex-container">
            <div className="flex-item flex-item11">
              <p>UV Index</p>
              <p>5</p>
            </div>
            <div className="flex-item flex-item12">
              <p>Wind Speed</p>
              <p>{weatherData.wind}mph</p>
            </div>
            <div className="flex-item flex-item13">
              <p>Chance of Rain</p>
              <p>{weatherData.rain}%</p>
            </div>
            <div className="flex-item flex-item14">
              <p>Sunrise & Sunset</p>
              <p>5.20</p>
              <p>17.20</p>
            </div>
            <div className="flex-item flex-item15">
              <p>Humidity</p>
              <p>{weatherData.humidity}%</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "1266ad07b66517497b1acf79ea5a6a64";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
