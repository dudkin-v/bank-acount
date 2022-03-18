import * as types from "./types";

const initialState = {
  token: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TOKEN_LOADING:
      return { ...state, loading: action.payload };
    case types.SET_TOKEN_ERROR:
      return { ...state, error: action.payload };
    case types.SET_TOKEN:
      return { ...state, token: action.payload };
    case types.LOG_OUT:
      return { ...state, token: null };
    default:
      return state;
  }
};

export default reducer;
