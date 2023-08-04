import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import roorReducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    roorReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;