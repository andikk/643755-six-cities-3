import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      mark={`mark`}
      src={`offer.src`}
      price={152}
      rating={80}
      name={`offer.name`}
      type={`offer.type`}
      onCardHover={() => {}}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
