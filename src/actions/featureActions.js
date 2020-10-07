export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const add_feature = (feature) => {
  return { type: ADD_FEATURE, payload: feature };
};

export const remove_feature = (feature) => {
  return { type: REMOVE_FEATURE, payload: feature };
};
