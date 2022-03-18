import axios from "axios";
import { store } from "../store";

export const endpoint = {
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

instance.interceptors.response.use((response) => response.data);

instance.interceptors.request.use((config) => ({
  ...config,
  headers: {
    ...config.headers,
    authorization: `Bearer ${store.getState().login.token}`,
  },
}));
