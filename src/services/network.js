import axios from "axios";
import i18n from "i18next";
import { store } from "../store";
import { logOut } from "../store/login/actions";

export const endpoint = {
  USER: "/user",
  SIGN_IN: "/auth/sign-in",
  SIGN_UP: "/auth/sign-up",
  CARD: "/card",
  TRANSACTION: "/transaction",
  TRANSACTIONS_HISTORY: "/transaction/history",
  SETTINGS: "/settings",
  MEMBERS: "/members",
};

export const instance = axios.create({
  baseURL: "https://test-bank-system.herokuapp.com",
});

instance.interceptors.response.use(
  (response) =>
    new Promise((res) => {
      setTimeout(() => {
        res(response.data);
      }, 1000);
    }),
  (error) => {
    if (error.message.includes("403")) {
      store.dispatch(logOut());
    }
    if (error.message.includes("Network")) {
      // eslint-disable-next-line no-param-reassign
      error.message = i18n.t("errors.internet");
    }
    throw error;
  }
);

instance.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...config.headers,
    authorization: `Bearer ${store.getState().login.token}`,
  },
}));
