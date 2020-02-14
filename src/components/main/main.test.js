import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import offers from "../../mocks/offers.js";

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      offersCount={312}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
