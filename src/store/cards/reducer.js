import * as types from "./types";

const initialState = {
  cards: [],
  loading: false,
  error: null,
  removeLoading: false,
  removeError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CARDS_LOADING:
      return { ...state, loading: action.payload };
    case types.SET_CARDS_ERROR:
      return { ...state, error: action.payload };
    case types.SET_CARDS:
      return { ...state, cards: action.payload };
    case types.REMOVE_CARD_LOADING:
      return { ...state, removeLoading: action.payload };
    case types.REMOVE_CARD_ERROR:
      return { ...state, removeError: action.payload };
    default:
      return state;
  }
};

export default reducer;
