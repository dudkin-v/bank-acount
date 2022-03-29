import { getUser } from "../user/thunk";
import { getLanguage } from "../settings/thunk";
import { getMembers } from "../recipients/thunk";
import { getCards } from "../cards/thunk";
import { setAppIsReady } from "./actions";

export const getAppData = () => async (dispatch) => {
  dispatch(setAppIsReady(false));
  await dispatch(getLanguage());
  await dispatch(getUser());
  await dispatch(getMembers());
  await dispatch(getCards());
  dispatch(setAppIsReady(true));
};
