import axios from "axios";

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

export const setToken = (token) => {
  instance.defaults.headers.authorization = `Bearer ${token}`;
};
