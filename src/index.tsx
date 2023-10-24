import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import * as Reducer from "./store/FeedbackStore/reducer";
// import * as types from "./type";

const rootElement = document.getElementById("root");

const store: Store<FeedbackState, FeedbackAction> & {
  dispatch: DispatchType;
} = createStore(Reducer.reducer, applyMiddleware(thunk));

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
