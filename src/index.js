import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "./containers/App";
import createStore from "./Store";
import rootReducer from "./reducers/root";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
