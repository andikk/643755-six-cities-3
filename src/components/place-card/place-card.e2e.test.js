import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should PlaceCard header link be pressed and mouse over card moved`, () => {
  const onHeaderClickHandler = jest.fn();
  const onCardHoverHandler = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        mark={`mark`}
        src={`offer.src`}
        price={152}
        rating={80}
        name={`offer.name`}
        type={`offer.type`}
        onCardHover={onCardHoverHandler}
        onHeaderClick={onHeaderClickHandler}
      />
  );

  placeCard.find(`.place-card__name`).simulate(`click`);
  expect(onHeaderClickHandler).toHaveBeenCalledTimes(1);

  placeCard.find(`.place-card`).simulate(`mouseover`);
});
