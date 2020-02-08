import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      offersCount={312}
      places={[`Place1`, `Place2`, `Place3`, `Place4`]}
      onHeaderClickHandler={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
