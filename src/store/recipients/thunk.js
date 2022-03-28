import * as action from "./actions";
import { instance, endpoint } from "../../services/network";

export const getMembers = () => async (dispatch) => {
  try {
    dispatch(action.setRecipientsLoading(true));
    const response = await instance.get(endpoint.MEMBERS);
    dispatch(action.setRecipients(response));
  } catch (error) {
    dispatch(action.setRecipientsError(error));
  } finally {
    dispatch(action.setRecipientsLoading(false));
  }
};
