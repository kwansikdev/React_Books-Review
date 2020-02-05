export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setToken = token => {
  return { type: SET_TOKEN, token };
};

export const removeToken = () => {
  return { type: REMOVE_TOKEN };
};
