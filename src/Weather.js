import React, {useState} from "react";
import axios from "axios"
import { ProgressBar } from "react-loader-spinner";
import Dateupdate from "./Dateupdate";
import "./Weather.css";

export default function Weather(props) {
  const[weatherInfo, setWeatherInfo] = useState({ready: false})
  
  function handleSubmit(response) {
    setWeatherInfo({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      iconlink: "https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
    })

  }

  if (weatherInfo.ready) {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-success w-100"
            />
          </div>
        </div>
      </form>
      <h1 className="mt-3">{weatherInfo.city}</h1>
      <img src={weatherInfo.iconlink} alt={weatherInfo.description} />
      <span className="temperature">{Math.round(weatherInfo.temperature)}</span>
      <span className="units">°C</span>
      <div className="row mt-2">
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherInfo.humidity}%</li>
            <li>Wind: {weatherInfo.wind}km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <Dateupdate date={weatherInfo.date} />
            </li>
            <li className="text-capitalize">{weatherInfo.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
  } else {
    const apiKey = "e9dbb073ecb679b0932ba8a75a3681c8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit)
    return (
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#563D7C"
        barColor="#51E5FF"
      />
    );
  }
}
