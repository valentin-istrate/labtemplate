import React from "react";
import ReactDOM from "react-dom";
import reducers from "./reducers";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { Router, browserHistory } from "react-router";

import routes from "./routes";
import "./static/styles/styles.scss";

const store = createStore(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById("root")
);
