import React from "react";
import "./App.css";
import pic from "./sunny.png";

export default function Header() {
  return (
    <div className="Header">
      <h1 className="city">Tompkinsville</h1>
      <h2 id="date-time">Thursday, 12:00PM</h2>
      <h2>Sunny</h2>
      <div className="row">
        <div className="col-6">
          <img src={pic} alt="sunny" width="100" />
          <h2 id="temp"> 15°F</h2>
        </div>
        <div className="col-6">
          <ul className="description">
            <li>
              Humidity: <span id="humidity">30</span>%
            </li>
            <li>
              Wind: <span id="wind">5</span>mph
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
