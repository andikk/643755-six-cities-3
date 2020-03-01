import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import offers from "../../mocks/offers.js";

const mockStore = configureStore([]);

it(`Render App`, () => {

  const store = mockStore({
    offers,
    city: `Paris`,
    activeFilter: {label: `Popular`, value: `ALL`}
  });

  const tree = renderer
    .create(<Provider store={store}><App
      offers={offers}
      city={`Paris`}
    /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
