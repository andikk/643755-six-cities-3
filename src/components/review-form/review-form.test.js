import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form.jsx";

it(`Should ReviewForm render correctly`, () => {

  const tree = renderer
    .create(<ReviewForm
      offerId = {1}
      handleFormSubmit = {() => {}}
      rating = {1}
      comment = {`PropTypes.string`}
      invalid = {true}
      submitting = {true}
      onRatingChange = {() => {}}
      onCommentChange = {() => {}}
      onSubmit = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
