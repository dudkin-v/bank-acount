import * as action from "./actions";
import { instance, endpoint } from "../../services/network";

export const getUser = () => async (dispatch) => {
  try {
    dispatch(action.setUserLoading(true));
    const response = await instance.get(endpoint.USER);
    dispatch(action.setUser(response));
  } catch (error) {
    dispatch(action.setUserError(error));
  } finally {
    dispatch(action.setUserLoading(false));
  }
};
