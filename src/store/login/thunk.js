import axios from "axios";
import * as action from "./actions";

const instance = axios.create({
  baseURL: "https://test-bank-system.herokuapp.com",
});

export const setToken = (token) => {
  instance.defaults.headers.authorization = `Bearer ${token}`;
};

export const logOut = () => (dispatch) => {
  dispatch(action.logOut());
  localStorage.removeItem("token");
};

export const onSignIn = (values) => async (dispatch) => {
  try {
    dispatch(action.setTokenLoading(true));
    const response = await instance.post("/auth/sign-in", values);
    dispatch(action.setToken(response.data.token));
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    dispatch(action.setTokenError(error));
  } finally {
    dispatch(action.setTokenLoading(false));
  }
};

export const onSignUP = (values) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_TOKEN_LOADING",
      payload: true,
    });
    const response = await instance.post("/auth/sign-up", values);
    dispatch({
      type: "SET_TOKEN",
      payload: response.data.token,
    });
    localStorage.setItem("token", response.data.token);
  } catch (e) {
    dispatch({
      type: "SET_TOKEN_ERROR",
      payload: e.message,
    });
  } finally {
    dispatch({
      type: "SET_TOKEN_LOADING",
      payload: false,
    });
  }
};
