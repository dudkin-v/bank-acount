import * as types from "./types";

const initialState = {
  language: "en",
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LANGUAGE_LOADING:
      return { ...state, loading: action.payload };
    case types.SET_LANGUAGE_ERROR:
      return { ...state, error: action.payload };
    case types.SET_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default reducer;
