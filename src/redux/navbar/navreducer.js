import * as actionTypes from "./constant";

export const searchReducer = (state = "", action) => {
  switch (action.type) {
    case actionTypes.SEARCH_ITEM:
      return action.payload;
    default:
      return state;
  }
};
