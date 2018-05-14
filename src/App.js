import React from "react";
import { observer } from "mobx-react";
import "./assets/style.css";

@observer
class App extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.store.addTodo(this.input.value);
    this.input.value = "";
  };

  render() {
    const { name, todos } = this.props.store;

    return (
      <div className="container">
        <React.Fragment>
          <h1 className="title">Ubralo React App with Mobx</h1>
          <h2>Hello {name}</h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" ref={input => (this.input = input)} />
          </form>
          <ul>{todos.map(todo => <li key={todo.id}>{todo.item}</li>)}</ul>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
