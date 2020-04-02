import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item.jsx";

it(`Should ReviewsItem render correctly`, () => {
  const review =  {
    id: 1,
    comment: `PropTypes.string`,
    user: {},
    rating: 1,
    date: `PropTypes.string`
  };

  const tree = renderer
    .create(<ReviewsItem
      review={review}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
