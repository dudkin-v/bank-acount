import { getUser } from "../user/thunk";
import { getLanguage } from "../settings/thunk";

export const getAppData = () => (dispatch) => {
  dispatch(getLanguage());
  dispatch(getUser());
};
