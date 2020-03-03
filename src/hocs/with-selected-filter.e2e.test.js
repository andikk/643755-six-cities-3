import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import withSelectedFilter from "../hocs/with-selected-filter.jsx";

function MockComponent() {
  return <div />;
}

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should check prop value`, () => {
  const openedValue = true;
  const WrappedMockComponent = withSelectedFilter(MockComponent);
  const wrapper = mount(
      <WrappedMockComponent/>
  );

  let component = null;
  component = wrapper.find(MockComponent);
  component.prop(`onToggleClickHandle`)(openedValue);

  wrapper.update();

  component = wrapper.find(MockComponent);

  expect(component.prop(`opened`)).toEqual(openedValue);

});
