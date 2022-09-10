import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
	function maxTemp() {
		return Math.round(props.data.temp.max);
	}

	function minTemp() {
		return Math.round(props.data.temp.min);
	}

	function day() {
		let date = new Date(props.data.dt * 1000)
		let day = date.getDay();

		let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
		return days[day];
	}

	return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={30} />
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="forecasttemp-max">{maxTemp()}°</span>
        <span className="forecasttemp-min ms-2">
          {minTemp()}°
        </span>
      </div>
    </div>
  );
}