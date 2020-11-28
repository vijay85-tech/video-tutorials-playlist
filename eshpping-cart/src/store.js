import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./reducers/productReducer";
const initialState = {};
const compseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    products: productsReducer,
  }),
  initialState,
  compseEnhancer(applyMiddleware(thunk))
);
export default store;
