import React from "react";

class Widget extends React.Component {
  state = { value: 0 };

  handleChange = () => {
    this.setState(state => ({ value: state.value + 1 }));
  };

  render() {
    return this.props.children({
      value: this.state.value,
      onChange: this.handleChange
    });
  }
}

export default Widget;
