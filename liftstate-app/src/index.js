import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";
import nameReducer from "./reducers/nameReducer";
import wishReducer from "./reducers/wishReducer";
import thunk from "redux-thunk";

import reportWebVitals from "./reportWebVitals";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const masterReducer = combineReducers({
  name: nameReducer,
  wish: wishReducer,
});
const store = createStore(
  masterReducer,{name:"Vijay sunaina gautam", wish:['Eat','Code']},
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
