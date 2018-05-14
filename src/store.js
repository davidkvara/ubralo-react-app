import { observable, action } from "mobx";

class Todo {
  @observable item;
  @observable id;
  @observable completed;
  constructor(value) {
    this.item = value;
    this.id = Date.now();
    this.completed = false;
  }
}

class AppStore {
  @observable name = "David";
  @observable todos = [];
  @action
  addTodo(item) {
    this.todos.push(new Todo(item));
  }
}

const store = new AppStore();

export default store;
