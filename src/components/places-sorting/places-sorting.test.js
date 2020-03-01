import React from "react";
import renderer from "react-test-renderer";
import PlacesSorting from "./places-sorting.jsx";


it(`Should PlacesSorting  render correctly`, () => {
  const activeFilter = {label: `Popular`, value: `ALL`};

  const tree = renderer
    .create(<PlacesSorting
      activeFilter = {activeFilter}
      onFilterClick={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


