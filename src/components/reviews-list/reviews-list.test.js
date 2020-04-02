import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";

it(`Should ReviewsList render correctly`, () => {
  const reviews = [{id: 1,
    comment: `PropTypes.string`,
    user: {},
    rating: 1,
    date: `PropTypes.string`},
  {id: 2,
    comment: `PropTypes.string`,
    user: {},
    rating: 1,
    date: `PropTypes.string`}];

  const tree = renderer
    .create(<ReviewsList
      reviews={reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
