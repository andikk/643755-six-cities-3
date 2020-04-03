import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import offers from "../../mocks/offers.js";

const mockStore = configureStore([]);

const store = mockStore({
  offers,
  city: `Paris`
});

it(`Should Main render correctly`, () => {
  const coordinates = offers.map((offer) => (offer.coordinates));

  const tree = renderer
    .create(<Provider store={store}><Main
      offers={offers}
      city={`Paris`}
      citiesList={[`Amsterdam`, `Paris`]}
      coordinates={coordinates}
      onHeaderClick = {() => {}}
      onCityClick = {() => {}}
    /></Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
