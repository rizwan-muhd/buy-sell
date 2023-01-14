import axios from "axios";
import { SIGN_UP } from "./constant";

export const signup = (data) => async (dispatch) => {
  try {
    const url = "http://localhost:5000/api/signup";
    const res = await axios.post(url);
    dispatch({ type: SIGN_UP, payload: res.data });
  } catch (error) {
    console.log("error while signup", error);
  }
};
