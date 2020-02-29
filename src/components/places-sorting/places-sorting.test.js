import React from "react";
import renderer from "react-test-renderer";
import PlacesSorting from "./places-sorting.jsx";


it(`Should PlacesSorting  render correctly`, () => {
  const tree = renderer
    .create(<PlacesSorting
      activeFilter={`Popular`}
      onFilterClick={()=>{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});


