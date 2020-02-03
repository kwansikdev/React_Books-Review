import { createStore } from "redux";
import reducer from "./reducer";

const token = localStorage.getItem("token");

export default function create(initialState) {
  return createStore(reducer, initialState);
}
