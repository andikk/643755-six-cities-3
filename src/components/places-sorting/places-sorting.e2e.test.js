import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import PlacesSorting from "./places-sorting.jsx";
import {Provider} from "react-redux";


const mockStore = configureStore([]);
const activeFilter = {label: `Popular`, value: `ALL`};
const store = mockStore({
  activeFilter
});

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should City in sore be changed`, () => {
  const onFilterClick = jest.fn();

  const placesSorting = shallow(
    <Provider store={store}> <PlacesSorting onFilterClick={onFilterClick} activeFilter={activeFilter}/> </Provider>
  )

  placesSorting.props().onFilterClick();
  expect(onFilterClick).toHaveBeenCalledWith(activeFilter);
});

