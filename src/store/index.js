import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import login from "./login/reducer";
import settings from "./settings/reducer";
import cards from "./cards/reducer";
import user from "./user/reducer";
import transactions from "./transactions/reducer";
import application from "./application/reducer";
import recipients from "./recipients/reducer";

const rootReducer = combineReducers({
  login,
  settings,
  cards,
  user,
  transactions,
  recipients,
  application,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);
export const persistor = persistStore(store);
