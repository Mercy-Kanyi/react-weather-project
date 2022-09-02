import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-success" />
          </div>
        </div>
      </form>
      <h1>Pioneer</h1>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
        alt="mostly cloudy"
      />
      22°C
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Precipitation: 5%</li>
            <li>Humidity: 86%</li>
            <li>Wind: 8km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>Saturday 00:00</li>
            <li>Clear with periodic clouds</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
