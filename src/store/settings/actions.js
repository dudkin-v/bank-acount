import * as types from "./types";

export const setLanguageLoading = (status) => ({
  type: types.SET_LANGUAGE_LOADING,
  payload: status,
});

export const setLanguageError = (error) => ({
  type: types.SET_LANGUAGE_ERROR,
  payload: error.message,
});

export const setLanguage = (language) => ({
  type: types.SET_LANGUAGE,
  payload: language,
});
