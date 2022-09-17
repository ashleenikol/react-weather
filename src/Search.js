import React from "react";
import "./App.css";

export default function Search() {
  return (
    <form className="search-engine">
      <input type="text" className="search-input" placeholder="Enter City" />
      <button>Search</button>
    </form>
  );
}
