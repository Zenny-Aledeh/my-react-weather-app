import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <p className="temp">
        <span>{Math.round(props.celsius)}</span>
        <span>℃</span>
      </p>
    </div>
  );
}
