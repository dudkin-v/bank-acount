import * as action from "./actions";
import { instance, endpoint } from "../../services/network";
import { getMembers } from "../recipients/thunk";
import { getCards } from "../cards/thunk";

export const onSendTransaction =
  (data, onCloseTransaction) => async (dispatch) => {
    try {
      dispatch(action.setTransactionLoading(true));
      await instance.post(endpoint.TRANSACTION, data);
      dispatch(getMembers());
      dispatch(getCards());
      onCloseTransaction();
    } catch (error) {
      dispatch(action.setTransactionError(error));
    } finally {
      dispatch(action.setTransactionLoading(false));
    }
  };
