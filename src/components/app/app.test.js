import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";
import offers from "../../mocks/offers.js";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offersCount={312}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
