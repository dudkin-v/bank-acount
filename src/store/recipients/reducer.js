import * as types from "./types";

const initialState = {
  recipients: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_RECIPIENTS_LOADING:
      return { ...state, loading: action.payload };
    case types.SET_RECIPIENTS_ERROR:
      return { ...state, error: action.payload };
    case types.SET_RECIPIENTS:
      return { ...state, recipients: action.payload };
    default:
      return state;
  }
};

export default reducer;
