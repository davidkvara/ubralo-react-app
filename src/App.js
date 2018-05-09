import React from "react";
import { observer } from "mobx-react";
import "./assets/style.css";

@observer
class App extends React.Component {
  render() {
    const { name, todos } = this.props.store;

    return (
      <div className="container">
        <h1 className="title">Ubralo React App with Mobx</h1>
        <h2>Hello {name}</h2>
        <ul>{todos.map(todo => <li key={todo}>{todo}</li>)}</ul>
      </div>
    );
  }
}
export default App;
