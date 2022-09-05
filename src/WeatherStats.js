import React from "react";
import Dateupdate from "./Dateupdate";

export default function WeatherStats(props) {
  return (
    <div className="WeatherStats">
      <h1 className="mt-3">{props.data.city}</h1>
      <img src={props.data.iconlink} alt={props.data.description} />
      <span className="temperature">{Math.round(props.data.temperature)}</span>
      <span className="units">°C</span>
      <div className="row mt-2">
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <Dateupdate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
