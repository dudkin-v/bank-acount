import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import login from "./login/reducer";
import settings from "./settings/reducer";
import cards from "./cards/reducer";
import user from "./user/reducer";
import transactions from "./transactions/reducer";
import recipients from "./recipients/reducer";

const rootReducer = combineReducers({
  login,
  settings,
  cards,
  user,
  transactions,
  recipients,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
