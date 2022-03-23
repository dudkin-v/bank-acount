import * as types from "./types";

export const setUserLoading = (status) => ({
  type: types.SET_USER_LOADING,
  payload: status,
});

export const setUserError = (error) => ({
  type: types.SET_USER_ERROR,
  payload: error.message,
});

export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});
