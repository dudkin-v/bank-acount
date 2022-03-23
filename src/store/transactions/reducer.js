import * as types from "./types";

const initialState = {
  transactionLoading: false,
  transactionError: null,
  history: [],
  historyLoading: false,
  historyError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TRANSACTION_LOADING:
      return { ...state, transactionLoading: action.payload };
    case types.SET_TRANSACTION_ERROR:
      return { ...state, transactionError: action.payload };
    case types.SET_HISTORY:
      return { ...state, history: action.payload };
    case types.SET_HISTORY_LOADING:
      return { ...state, historyLoading: action.payload };
    case types.SET_HISTORY_ERROR:
      return { ...state, historyLoading: action.payload };
    default:
      return state;
  }
};

export default reducer;
