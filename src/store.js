import { observable } from "mobx";

class AppStore {
  @observable name = "David";
  @observable todos = ["one", "two", "three"];
}

const store = new AppStore();

export default store;
