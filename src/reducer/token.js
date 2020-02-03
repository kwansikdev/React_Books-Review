import { SET_TOKEN, REMOVE_TOKEN } from "../action";

const intialState = null;

const token = (state = intialState, action) => {
  if (action.type === SET_TOKEN) {
    return action.token;
  } else if (action.type === REMOVE_TOKEN) {
    return null;
  }
  return state;
};

export default token;
