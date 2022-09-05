import React, { useState } from "react";
import axios from "axios";
import { ProgressBar } from "react-loader-spinner";
import "./Weather.css";
import WeatherStats from "./WeatherStats";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleRequest(response) {
    setWeatherInfo({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }
  
  function search() {
    const apiKey = "e9dbb073ecb679b0932ba8a75a3681c8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleRequest);
  }

  function handleSubmission(event) {
    event.preventDefault();
    search(city);
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  if (weatherInfo.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmission}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCity}
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
        <WeatherStats data={weatherInfo} />
      </div>
    );
  } else {
    search();
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
