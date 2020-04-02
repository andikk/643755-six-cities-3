import React from "react";
import renderer from "react-test-renderer";
import Signin from "./signin.jsx";

it(`Should Signin render correctly`, () => {

  const tree = renderer
    .create(<Signin
      login={()=>{}}
      authorizationStatus={`NO_AUTH`}
      history={{}}
      location={{}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
