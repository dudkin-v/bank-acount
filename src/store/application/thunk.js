import { getUser } from "../user/thunk";
import { getLanguage } from "../settings/thunk";
import { getMembers } from "../recipients/thunk";

export const getAppData = () => (dispatch) => {
  dispatch(getLanguage());
  dispatch(getUser());
  dispatch(getMembers());
};
