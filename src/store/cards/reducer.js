import * as types from "./types";

const initialState = {
  cards: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CARDS_LOADING:
      return { ...state, loading: action.payload };
    case types.SET_CARDS_ERROR:
      return { ...state, error: action.payload };
    case types.SET_CARDS:
      return { ...state, cards: action.payload };
    default:
      return state;
  }
};

export default reducer;
