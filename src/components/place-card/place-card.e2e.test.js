import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";
import offers from "../../mocks/offers";

Enzyme.configure({
  adapter: new Adapter(),
});


it(`Should mouse over PlaceCardMoved`, () => {
  const card = offers[1];
  const onHeaderClickHandler = jest.fn();
  const onCardHoverHandler = jest.fn();

  const placeCard = shallow(
      <PlaceCard card={card} onCardHover={onCardHoverHandler} onHeaderClick={onHeaderClickHandler}/>
  );

  placeCard.find(`.place-card`).simulate(`mouseleave`);
  expect(onCardHoverHandler).toHaveBeenLastCalledWith(null);

  placeCard.find(`.place-card`).simulate(`mouseenter`);
  expect(onCardHoverHandler).toHaveBeenLastCalledWith(card);
});

it(`Should PlaceCard header link be pressed`, () => {
  const card = offers[1];
  const onHeaderClickHandler = jest.fn();
  const onCardHoverHandler = jest.fn();

  const placeCard = shallow(
      <PlaceCard card={card} onCardHover={onCardHoverHandler} onHeaderClick={onHeaderClickHandler}/>
  );

  placeCard.find(`.place-card__name`).simulate(`click`);
  expect(onHeaderClickHandler).toHaveBeenCalledTimes(1);
});
