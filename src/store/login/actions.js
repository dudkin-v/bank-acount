import * as types from "./types";

export const setToken = (token) => ({
  type: types.SET_TOKEN,
  payload: token,
});

export const setTokenLoading = (status) => ({
  type: types.SET_TOKEN_LOADING,
  payload: status,
});

export const setTokenError = (error) => ({
  type: types.SET_TOKEN_ERROR,
  payload: error.message,
});

export const logOut = () => ({
  type: types.LOG_OUT,
});
