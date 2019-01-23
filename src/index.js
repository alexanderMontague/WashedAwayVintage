import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import ShopFront from "./containers/ShopFront";

ReactDOM.render(
  <Provider store={store}>
    <ShopFront />
  </Provider>,
  document.getElementById("app")
);
