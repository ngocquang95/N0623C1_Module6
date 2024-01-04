import { combineReducers } from "redux";
import reducerCounter from "./counter";

const allReducers = combineReducers({
  counter: reducerCounter,
  // todo: reducerTodo, ...
});

export default allReducers;
