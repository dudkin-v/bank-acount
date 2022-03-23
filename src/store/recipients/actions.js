import * as types from "./types";

export const setRecipientsLoading = (status) => ({
  type: types.SET_RECIPIENTS_LOADING,
  payload: status,
});

export const setRecipientsError = (error) => ({
  type: types.SET_RECIPIENTS_ERROR,
  payload: error.message,
});

export const setRecipients = (recipients) => ({
  type: types.SET_RECIPIENTS,
  payload: recipients,
});
