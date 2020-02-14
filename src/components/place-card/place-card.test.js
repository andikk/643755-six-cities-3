import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card.jsx";

it(`Should PlaceCard render correctly`, () => {
  const card = {
    mark: `mark`,
    src: `offer.src`,
    price: 152,
    rating: 80,
    name: `offer.name`,
    type: `offer.type`,
  };

  const tree = renderer
    .create(<PlaceCard
      card={card}
      onCardHover={() => {}}
      onHeaderClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
