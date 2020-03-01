import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlacesSorting from "./places-sorting.jsx";

const activeFilter = {label: `Popular`, value: `ALL`};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should City in sore be changed`, () => {
  const onFilterClick = jest.fn();

  const placesSorting = shallow(
      <PlacesSorting onFilterClick={onFilterClick} activeFilter={activeFilter}/>
  );

  placesSorting.props().onFilterClick();
  expect(onFilterClick.mock.calls.length).toBe(1);

});

