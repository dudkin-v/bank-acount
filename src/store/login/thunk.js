import * as action from "./actions";
import { instance, endpoint } from "../../services/network";

export const logOut = () => (dispatch) => {
  dispatch(action.logOut());
};

export const onSignIn = (values) => async (dispatch) => {
  try {
    dispatch(action.setTokenLoading(true));
    const response = await instance.post(endpoint.SIGN_IN, values);
    dispatch(action.setToken(response.token));
  } catch (error) {
    dispatch(action.setTokenError(error));
  } finally {
    dispatch(action.setTokenLoading(false));
  }
};

export const onSignUP = (values) => async (dispatch) => {
  try {
    dispatch(action.setTokenLoading(true));
    const response = await instance.post(endpoint.SIGN_UP, values);
    dispatch(action.setToken(response.token));
  } catch (error) {
    dispatch(action.setTokenError(error));
  } finally {
    dispatch(action.setTokenLoading(false));
  }
};
