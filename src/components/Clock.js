import React from "react";

export default class Clock extends React.Component {
  state = { time: new Date() };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return this.props.children(this.state.time.toLocaleTimeString());
  }
}
