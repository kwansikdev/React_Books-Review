import { createStore } from "redux";
import reducers from "./reducers";

export default function create(initialState) {
  return createStore(reducers, initialState);
}
