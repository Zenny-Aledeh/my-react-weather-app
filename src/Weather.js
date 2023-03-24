import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      rain: response.data.main.rain,
      city: response.data.name,
      temp_max: response.data.main.temp_max,
      temp_min: response.data.main.temp_min,
    });
  }

  function search() {
    const apiKey = "1266ad07b66517497b1acf79ea5a6a64";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather grid-container">
        <div className="main-container">
          <div className="grid-item main">
            <form onSubmit={handleSubmit}>
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                className="form-search"
                onChange={handleCityChange}
              />
              <input type="submit" value="🔍" className="search-btn" />
            </form>
            <div>
              <WeatherIcon code={props.data.icon} />
            </div>
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="main-img"
            />
            <div>
              <WeatherTemperature celsius={props.data.temperaature} />

              <p className="day">
                <FormattedDate date={weatherData.date} />
              </p>
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
              <p>Lowest Temp</p>
              <p>{Math.round(weatherData.temp_min)}</p>
            </div>
            <div className="flex-item flex-item14">
              <p>Highest Temp</p>
              <p>{Math.round(weatherData.temp_max)}</p>
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
    search();
    return "Loading...";
  }
}
