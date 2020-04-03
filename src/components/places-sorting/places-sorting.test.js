import React from "react";
import renderer from "react-test-renderer";
import PlacesSorting from "./places-sorting.jsx";

it(`Should PlacesSorting  render correctly`, () => {
  const activeFilter = {label: `Popular`, value: `ALL`};
  const filters = [
    {label: `Popular`, value: `ALL`},
    {label: `Price: low to high`, value: `PRICE_ASC`},
    {label: `Price: high to low`, value: `PRICE_DESC`},
    {label: `Top rated first`, value: `RATING_DESC`}
  ];

  const tree = renderer
    .create(<PlacesSorting
      filters = {filters}
      activeFilter = {activeFilter}
      onToggleClickHandle={()=>{}}
      onFilterClick={()=>{}}
      onSelectCloseHandle={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


