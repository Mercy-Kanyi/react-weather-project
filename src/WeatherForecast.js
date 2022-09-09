import React from "react"
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
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