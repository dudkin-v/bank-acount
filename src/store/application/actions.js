import { SET_IS_READY } from "./types";

export const setAppIsReady = (isReady) => ({
  type: SET_IS_READY,
  payload: isReady,
});
