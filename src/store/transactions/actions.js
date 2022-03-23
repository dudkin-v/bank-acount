import * as types from "./types";

export const setTransactionLoading = (status) => ({
  type: types.SET_TRANSACTION_LOADING,
  payload: status,
});

export const setTransactionError = (error) => ({
  type: types.SET_TRANSACTION_ERROR,
  payload: error.message,
});

export const setHistory = (history) => ({
  type: types.SET_HISTORY,
  payload: history,
});

export const setHistoryLoading = (status) => ({
  type: types.SET_HISTORY_LOADING,
  payload: status,
});

export const setHistoryError = (error) => ({
  type: types.SET_HISTORY_ERROR,
  payload: error.message,
});
