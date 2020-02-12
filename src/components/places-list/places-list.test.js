import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list.jsx";
import offers from "../../mocks/offers.js";

it(`Should Places List render correctly`, () => {
  const tree = renderer
    .create(<PlacesList
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
