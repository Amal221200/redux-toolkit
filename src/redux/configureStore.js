import { combineReducers, createStore } from "redux";
import counterReducer from "./ducks/counter";

const reducer = combineReducers({
  counterReducer
});
const store = createStore(reducer);

export default store;
