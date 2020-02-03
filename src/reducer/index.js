import { combineReducers } from "redux";
import token from "./token";
import loading from "./loading";

const reducer = combineReducers({ token });

export default reducer;
