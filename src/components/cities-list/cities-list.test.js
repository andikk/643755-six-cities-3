import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list.jsx";

it(`Should CitiesList render correctly`, () => {
  const tree = renderer
    .create(<CitiesList
      citiesList={`Paris, Amsterdam`}
      city={`Paris`}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
