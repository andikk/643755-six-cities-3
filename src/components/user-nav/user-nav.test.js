import React from "react";
import renderer from "react-test-renderer";
import UserNav from "./user-nav.jsx";

it(`Should UserNav render correctly`, () => {

  const tree = renderer
    .create(<UserNav
      authorizationStatus = {`NO_AUTH`}
      user={{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
