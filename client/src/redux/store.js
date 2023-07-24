import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import roorReducer from "./reducer";
import thunkMiddleware from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    roorReducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;