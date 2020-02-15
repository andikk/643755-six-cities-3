import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";
import offers from "../../mocks/offers";

it(`Should PlaceCard render correctly`, () => {
  const card = offers[0];

  const tree = renderer
    .create(<PlaceCard
      card={card}
      onCardHover={() => {}}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
