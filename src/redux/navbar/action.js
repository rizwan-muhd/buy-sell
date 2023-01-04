import { SEARCH_ITEM } from "./constant";

export const searchItem = (data) => async (dispatch) => {
  try {
    // const res = await axios.get("http://localhost:3008/app/gettodo");
    dispatch({ type: SEARCH_ITEM, payload: data });
  } catch (error) {
    console.log("error while getting todos", error);
  }
};
