import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item.jsx";
import offers from "../../mocks/offers";

it(`Should ReviewsItem render correctly`, () => {
  const review = offers[0].reviews[0];

  const tree = renderer
    .create(<ReviewsItem
      review={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
