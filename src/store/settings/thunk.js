import * as action from "./actions";
import { instance, endpoint } from "../../services/network";

export const onUpdateLanguage = (value) => async (dispatch) => {
  try {
    dispatch(action.setLanguageLoading(true));
    const response = await instance.patch(endpoint.SETTINGS, {
      language: value,
    });
    dispatch(action.setLanguage(response.data.language));
  } catch (error) {
    dispatch(action.setLanguageError(error));
  } finally {
    dispatch(action.setLanguageLoading(false));
  }
};

export const getLanguage = () => async (dispatch) => {
  try {
    dispatch(action.setLanguageLoading(true));
    const response = await instance.get(endpoint.SETTINGS);
    dispatch(action.setLanguage(response.data.language));
  } catch (error) {
    dispatch(action.setLanguageError(error));
  } finally {
    dispatch(action.setLanguageLoading(false));
  }
};
