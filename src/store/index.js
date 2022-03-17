import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import login from "./login/reducer";

const rootReducer = combineReducers({
    login,
});

export default createStore(rootReducer, applyMiddleware(thunk));
