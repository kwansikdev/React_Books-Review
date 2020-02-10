import UserService from "../../services/UserService";
import { push } from "connected-react-router";

// action types
const PENDING = "books-review/auth/PENDING";
const SUCCESS = "books-review/auth/SUCCESS";
const FAIL = "books-review/auth/FAIL";

// initial state
const initialState = {
  token: null,
  loading: false,
  error: null
};

// action creator function
const pending = () => ({ type: PENDING });
const success = token => ({ type: SUCCESS, token });
const fail = error => ({ type: FAIL, error });

// reducers
const auth = (state = initialState, action) => {
  switch (action.type) {
    case PENDING:
      return {
        token: null,
        loading: true,
        error: null
      };
    case SUCCESS:
      return {
        token: action.token,
        loading: false,
        error: null
      };
    case FAIL:
      return {
        token: null,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default auth;

// thunk
export const login = (email, password) => async dispatch => {
  try {
    dispatch(pending());
    const res = await UserService.login(email, password);
    const { token } = res.data;
    console.log(res.data);
    localStorage.setItem("token", token);
    dispatch(success(token));
    dispatch(push("/"));
  } catch (error) {
    dispatch(fail(error));
  }
};

export const logout = token => async dispatch => {
  try {
    await UserService.logout(token);
  } catch (error) {
    dispatch(fail(error));
  }

  localStorage.removeItem("token");
  dispatch(success(null));
};
