import axios from "axios";

const instance = axios.create({
  baseURL: "https://test-bank-system.herokuapp.com",
});

export const setToken = (token) => {
  instance.defaults.headers.authorization = `Bearer ${token}`;
};

export const logOut = () => (dispatch) => {
  dispatch({
    type: "LOG_OUT",
  });
  localStorage.removeItem("token");
};

export const onSignIn = (values) => async (dispatch) => {
  try {
    dispatch({
      type: "SET_TOKEN_LOADING",
      payload: true,
    });
    const response = await instance.post("/auth/sign-in", values);
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
