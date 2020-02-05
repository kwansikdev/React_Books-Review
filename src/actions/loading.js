export const START_LOADING = "START_LOADING";
export const END_LOADING = "END_LOADING";

export const startLoading = () => {
  return { type: START_LOADING };
};

export const endLoading = () => {
  return { type: END_LOADING };
};
