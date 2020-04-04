import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

it(`Should Map render correctly`, () => {

  const tree = renderer
    .create(<Map
      city = {{name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}}}
      coordinates = {[[50.938361, 6.959974]]}
      className = {`PropTypes.string`}
      activeMarkerCoordinates = {[50.938361, 6.959974]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
