import { GET_ERROR } from "../actions";

const initialState = null;

const error = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERROR:
      return action.error;

    default:
      return state;
  }
};

export default error;
