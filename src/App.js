import React from "react";
import "./assets/style.css";

export default ({ name }) => (
  <div className="container">
    <h1 className="title">Ubralo React App</h1>
    <hr />
    <h2>Hello {name}!</h2>
  </div>
);
