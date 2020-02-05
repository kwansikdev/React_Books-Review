export const GET_ERROR = "GET_ERROR";

export const getError = error => {
  return {
    type: GET_ERROR,
    error
  };
};
