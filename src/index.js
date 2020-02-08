import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  OFFERS_COUNT: 312
};

const places = [`Place1`, `Place2`, `Place3`, `Place4`];

ReactDOM.render(
    <App offersCount={Settings.OFFERS_COUNT}
      places={places}
    />,
    document.getElementById(`root`)
);
