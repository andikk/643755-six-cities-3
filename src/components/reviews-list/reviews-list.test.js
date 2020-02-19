import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";
import offers from "../../mocks/offers.js";

it(`Should ReviewsList render correctly`, () => {
  const reviews = offers[0].reviews;

  const tree = renderer
    .create(<ReviewsList
      reviews={reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
