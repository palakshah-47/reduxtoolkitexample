import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import rootReducer from "./stateSlice";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";

const store = configureStore({
  reducer: rootReducer
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
