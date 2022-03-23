import * as types from "./types";

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_LOADING:
      return { ...state, loading: action.payload };
    case types.SET_USER_ERROR:
      return { ...state, error: action.payload };
    case types.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default reducer;
