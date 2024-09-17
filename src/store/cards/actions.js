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

export const setCardHistory = (history) => ({
  type: types.SET_CARD_HISTORY,
  payload: history,
});

export const cardHistoryLoading = (status) => ({
  type: types.CARD_HISTORY_LOADING,
  payload: status,
});

export const cardHistoryError = (error) => ({
  type: types.CARD_HISTORY_ERROR,
  payload: error.message,
});
