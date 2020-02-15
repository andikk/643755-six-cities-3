import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";
import offers from "../../mocks/offers.js";

it(`Should Property render correctly`, () => {
  const tree = renderer
    .create(<Property
      card={offers[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
