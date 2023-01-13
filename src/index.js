import React from "react";
<<<<<<< HEAD
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
=======
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
>>>>>>> fdd226dd6450f13017ca065a6160666fe4244893
import "./sass/index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "aos/dist/aos.css";
import store from './redux/store';

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
