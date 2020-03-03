import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import PlacesSorting from "./places-sorting.jsx";

const activeFilter = {label: `Popular`, value: `ALL`};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should City in sore be changed`, () => {
  const onToggleClickHandle = jest.fn();
  const onSelectCloseHandle = jest.fn();
  const filters = [
    {label: `Popular`, value: `ALL`},
    {label: `Price: low to high`, value: `PRICE_ASC`},
    {label: `Price: high to low`, value: `PRICE_DESC`},
    {label: `Top rated first`, value: `RATING_DESC`}
  ];

  const placesSorting = shallow(
      <PlacesSorting filters={filters} onSelectCloseHandle={onSelectCloseHandle} onToggleClickHandle={onToggleClickHandle } activeFilter={activeFilter} opened={true}/>
  );

  placesSorting.find(`.places__option:first-child`).simulate(`click`);
  expect(onSelectCloseHandle).toHaveBeenCalledWith(activeFilter);
  expect(onSelectCloseHandle).toHaveBeenCalledTimes(1);

});
