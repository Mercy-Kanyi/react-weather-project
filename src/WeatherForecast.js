import axios from "axios";
import React from "react"
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {

  function handleResponse(response) {
    console.log(response.data)
  } 

  let apiKey = "e9dbb073ecb679b0932ba8a75a3681c8";
  let longitude = props.coords.lon;
  let latitude = props.coords.lat;
  let apiUrl =
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse)
	return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <div className="WeatherForecast-icon">
            <WeatherIcon code="01d" size={30} />
          </div>
          <div className="WeatherForecast-temperatures">
            <span className="forecasttemp-max">19°</span>
            <span className="forecasttemp-min ms-2">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}