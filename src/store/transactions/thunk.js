import * as action from "./actions";
import { instance, endpoint } from "../../services/network";

export const onSendTransaction = (data) => async (dispatch) => {
  try {
    dispatch(action.setTransactionLoading(true));
    await instance.post(endpoint.TRANSACTION, data);
  } catch (error) {
    dispatch(action.setTransactionError(error));
  } finally {
    dispatch(action.setTransactionLoading(false));
  }
};
