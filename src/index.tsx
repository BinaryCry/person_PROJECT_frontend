import * as React from "react";
import * as ReactDOM from "react-dom";
import Routing from "./routing";
import store from "./Store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Routing />
  </Provider>,
  document.getElementById("app")
);
