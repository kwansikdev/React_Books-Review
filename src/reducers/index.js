import { combineReducers } from "redux";
import token from "./token";
import loading from "./loading";
import error from "./error";
import books from "./books";

const reducers = combineReducers({
  token,
  loading,
  error,
  books
});

export default reducers;
