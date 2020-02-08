import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offersCount={312}
      places={[`Place1`, `Place2`, `Place3`, `Place4`]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
