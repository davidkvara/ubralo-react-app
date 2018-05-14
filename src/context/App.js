// thanks to wes bos: https://www.youtube.com/watch?v=XLJN4JfniH4
import React, { Component } from "react";
import "../assets/style.css";

const MyContext = React.createContext();

class MyProvider extends Component {
  state = { name: "David", age: 26, cool: false };
  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          incAge: () => this.setState({ age: this.state.age + 1 })
        }}
      >
        <div>{this.props.children}</div>
      </MyContext.Provider>
    );
  }
}

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="container border">
          <h2>hello from APP; Component That holds the state </h2>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

const Family = props => {
  return (
    <div className="border">
      <h2>this is family component</h2>
      <p>passing props name! | no more with context </p>
      <Person />
    </div>
  );
};

const Person = props => {
  return (
    <div className="border">
      <MyContext.Consumer>
        {context => {
          return (
            <React.Fragment>
              <h2>This is Person talkin</h2>
              <p>heere's what you passed from App:</p>
              <ul>
                <li>
                  name: <em>{context.state.name}</em>
                </li>
                <li>
                  age: <em>{context.state.age}</em>
                </li>
                <li>
                  cool: <em>{context.state.cool ? "Hell Yeah" : "Nope"}</em>
                </li>
              </ul>
              <button onClick={context.incAge}>+age</button>
            </React.Fragment>
          );
        }}
      </MyContext.Consumer>
    </div>
  );
};

export default App;
