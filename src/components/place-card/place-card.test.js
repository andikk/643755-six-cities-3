import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      name={`Place`}
      onHeaderClickHandler={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
