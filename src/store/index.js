import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import login from "./login/reducer";
import settings from "./settings/reducer";

const rootReducer = combineReducers({
  login, settings,
});

export default createStore(rootReducer, applyMiddleware(thunk));
