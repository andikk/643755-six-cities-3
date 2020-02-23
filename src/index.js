import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducer';

import offers from "./mocks/offers.js";

const Settings = {
  OFFERS_COUNT: 312
};

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById(`root`)
);

// <App offersCount={Settings.OFFERS_COUNT}
//      offers={offers}
// />
