import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./sass/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import "aos/dist/aos.css";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
