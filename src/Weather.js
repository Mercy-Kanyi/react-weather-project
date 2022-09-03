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
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input type="submit" 
            value="search" 
            className="btn btn-success w-100" 
            />
          </div>
        </div>
      </form>
      <h1 className="mt-3">Pioneer</h1>
      <div></div>
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
        alt="mostly cloudy"
      />
      <span className="temperature">22</span>
      <span className="units">°C</span>
      <div className="row mt-2">
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
