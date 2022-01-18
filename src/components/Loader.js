import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="load-container">
      <h2>Loading...</h2>
      <div className="loader"></div>
    </div>
  );
}

export default Loader;