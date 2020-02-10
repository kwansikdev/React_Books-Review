import { combineReducers } from "redux";
import books from "./books";
import auth from "./auth";

const reducers = () =>
  combineReducers({
    books,
    auth
  });

export default reducers;
