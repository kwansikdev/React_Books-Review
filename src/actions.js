import axios from "axios";

// token
export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setToken = token => {
  return { type: SET_TOKEN, token };
};

export const removeToken = () => {
  return { type: REMOVE_TOKEN };
};

// error
export const SET_ERROR = "GET_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const setError = error => {
  return {
    type: SET_ERROR,
    error
  };
};

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  };
};

// loading
export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

export const startLoading = () => {
  return { type: START_LOADING };
};

export const endLoading = () => {
  return { type: END_LOADING };
};

// books
export const SET_BOOKS = "SET_BOOKS";

export const setBooks = books => {
  return {
    type: SET_BOOKS,
    books
  };
};

// Thunk
export const loginThunk = (email, password) => async dispatch => {
  try {
    dispatch(clearError());
    dispatch(startLoading());
    const response = await axios.post("https://api.marktube.tv/v1/me", {
      email,
      password
    });
    console.log(response.data);
    const { token } = response.data;
    dispatch(endLoading());
    localStorage.setItem("token", token);
    dispatch(setToken(token));
  } catch (error) {
    dispatch(endLoading());
    dispatch(setError(error));
    throw error;
  }
};

export const logoutThunk = token => async dispatch => {
  try {
    await axios.delete("https://api.marktube.tv/v1/me", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch(removeToken(token));
    localStorage.removeItem("token");
  } catch (error) {}
};

export const setBooksThunk = token => async dispatch => {
  try {
    const response = await axios.get("https://api.marktube.tv/v1/book", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    dispatch(setBooks(response.data));
  } catch {}
};

export const addBookThunk = (token, title, author) => async dispatch => {
  try {
    await axios.post(
      "https://api.marktube.tv/v1/book",
      {
        title,
        author
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  } catch {}
};

export const removeBooksThunk = (token, id) => async dispatch => {
  try {
    await axios.delete(`https://api.marktube.tv/v1/book/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    console.log(error);
  }
};
