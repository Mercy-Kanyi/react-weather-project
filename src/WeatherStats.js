import React from "react";
import Dateupdate from "./Dateupdate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherStats(props) {
  return (
    <div className="WeatherStats">
      <h1 className="mt-3">{props.data.city}</h1>
      <WeatherIcon code={props.data.icon} />
      <WeatherTemperature celsius={props.data.temperature} />

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
