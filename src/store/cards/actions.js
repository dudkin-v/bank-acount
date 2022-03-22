import * as types from "./types";

export const setCardsLoading = (status) => ({
  type: types.SET_CARDS_LOADING,
  payload: status,
});

export const setCardsError = (error) => ({
  type: types.SET_CARDS_ERROR,
  payload: error.message,
});

export const setCards = (cards) => ({
  type: types.SET_CARDS,
  payload: cards,
});

export const removeCardLoading = (status) => ({
  type: types.SET_CARDS_LOADING,
  payload: status,
});

export const removeCardError = (error) => ({
  type: types.SET_CARDS_ERROR,
  payload: error.message,
});
