export const SET_TOKEN = "SET_TOKEN";
export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const setToken = token => {
  return { type: SET_TOKEN, token };
};

export const removeToken = () => {
  return { type: REMOVE_TOKEN };
};

export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

export const startLoading = () => {
  return { type: START_LOADING };
};

export const endLoading = () => {
  return { type: END_LOADING };
};
