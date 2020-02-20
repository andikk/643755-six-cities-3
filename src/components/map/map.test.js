import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import offers from "../../mocks/offers.js";

it(`Should Map render correctly`, () => {

  const coordinates = offers.map((offer) => (offer.coordinates));

  const tree = renderer
    .create(<Map
      coordinates={coordinates}
      className={`cities__map`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
