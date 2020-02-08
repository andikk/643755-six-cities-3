import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlaceCard from "./place-card";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should PlaceCard header link be pressed`, () => {
  const onHeaderClickHandler = jest.fn();

  const placeCard = shallow(
      <PlaceCard
        name={``}
        onHeaderClickHandler={onHeaderClickHandler}
      />
  );

  placeCard.find(`.place-card__name`).simulate(`click`);

  expect(onHeaderClickHandler).toHaveBeenCalledTimes(1);
});
