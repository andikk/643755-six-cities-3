import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import offers from "../../mocks/offers.js";

it(`Should Map render correctly`, () => {
  const tree = renderer
    .create(<Map
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
