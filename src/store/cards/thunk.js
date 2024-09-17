import orderBy from "lodash/orderBy";
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

export const removeCard = (cardId) => async (dispatch) => {
  try {
    dispatch(action.removeCardLoading(true));
    await instance.delete(`${endpoint.CARD}/${cardId}`);
    dispatch(getCards());
  } catch (error) {
    dispatch(action.removeCardError(error));
  } finally {
    dispatch(action.removeCardLoading(false));
  }
};

export const getCardHistory = (cardId) => async (dispatch) => {
  try {
    dispatch(action.cardHistoryLoading(true));
    const response = await instance.get(
      `${endpoint.TRANSACTIONS_HISTORY}/${cardId}`
    );
    dispatch(action.setCardHistory(orderBy(response, ["date"], ["desc"])));
  } catch (error) {
    dispatch(action.cardHistoryError(error));
  } finally {
    dispatch(action.cardHistoryLoading(false));
  }
};
