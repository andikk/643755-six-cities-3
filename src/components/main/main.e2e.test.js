import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should header link be pressed`, () => {
  const onHeaderClickHandler = jest.fn();
  const places = [`Place1`, `Place2`, `Place3`, `Place4`];
  const main = shallow(
      <Main
        offersCount={312}
        places={places}
        onHeaderClickHandler={onHeaderClickHandler}
      />
  );
  const headers = main.find(`h2.place-card__name`);
  headers.forEach((header, i) => {
    header.props().onClick();
  });

  expect(onHeaderClickHandler.mock.calls.length).toBe(places.length);


});
