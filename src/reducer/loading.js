import { START_LOADING, END_LOADING } from "../action";

const initialState = false;

const loading = (state = initialState, action) => {
  if (action.type === START_LOADING) {
    return true;
  } else if (action.type === END_LOADING) return state;
};

export default loading;
