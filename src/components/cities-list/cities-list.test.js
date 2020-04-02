import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list.jsx";

it(`Should CitiesList render correctly`, () => {
  const tree = renderer
    .create(<CitiesList
      citiesList={[{name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}}, {name: `Paris`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}}]}
      city={{name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}}}
      onCityClick = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
