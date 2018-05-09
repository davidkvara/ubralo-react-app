import React from "react";

class Widget extends React.Component {
  state = { value: "" };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
          placeholder="placeholder"
        />
        <h2>{this.state.value}</h2>
      </div>
    );
  }
}

export default Widget;
