import * as action from "./actions";
import { instance, endpoint } from "../../services/network";

export const getCards = () => async (dispatch) => {
  try {
    dispatch(action.setCardsLoading(true));
    const response = await instance.get(endpoint.CARD);
    dispatch(action.setCards(response));
  } catch (error) {
    dispatch(action.setCardsError(error));
  } finally {
    dispatch(action.setCardsLoading(false));
  }
};

export const addCard = (cardData) => async (dispatch) => {
  try {
    dispatch(action.setCardsLoading(true));
    await instance.post(endpoint.CARD, cardData);
    dispatch(getCards());
  } catch (error) {
    dispatch(action.setCardsError(error));
  } finally {
    dispatch(action.setCardsLoading(false));
  }
};
