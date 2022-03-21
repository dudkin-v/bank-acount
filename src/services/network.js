import axios from "axios";
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
};

export const instance = axios.create({
  baseURL: "https://test-bank-system.herokuapp.com",
});

instance.interceptors.response.use(
  (response) =>
    new Promise((res) => {
      setTimeout(() => {
        res(response.data);
      }, 3000);
    }),
  (error) => {
    if (error.message.includes("403")) {
      store.dispatch(logOut());
    }
    return error;
  }
);

instance.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...config.headers,
    authorization: `Bearer ${store.getState().login.token}`,
  },
}));
