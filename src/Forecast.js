import React from "react";
import "./App.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div class="row">
        <div class="col-2">
          <div class="weather-forecast-date">Thu</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
          <div class="weather-forecast-temperatures">
            <span class="weather-forecast-temperature-max">18°</span>
            <span class="weather-forecast-temperature-min">12°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
