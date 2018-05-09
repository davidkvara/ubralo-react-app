import React from "react";
import PropTypes from "prop-types";
import "./assets/style.css";

const App = ({ name }) => (
  <div className="container">
    <h1 className="title">
      Ubralo React App
      <span title="PAWN" style={{ color: "black" }}>
        &#9817;
      </span>
    </h1>
    <hr />
    <h2>Hello {name}!</h2>
  </div>
);

App.propTypes = {
  name: PropTypes.string.isRequired
};

App.defaultProps = {
  name: "World"
};

export default App;
