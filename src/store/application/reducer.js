import { SET_IS_READY } from "./types";

const initialState = {
  isReady: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_READY:
      return { ...state, isReady: action.payload };
    default:
      return state;
  }
};

export default reducer;
