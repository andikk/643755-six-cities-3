import {ActionCreator} from './reducer';
import offers from "./mocks/offers";


describe(`setCity action`, () => {
  it(`returns expected results`, () => {
    const mockResult = {
      type: `SET_CITY`,
      payload: `Paris`,
    };

    expect(ActionCreator.setCity(`Paris`)).toEqual(mockResult);
  });
});

describe(`setOffersList action`, () => {
  it(`returns expected results`, () => {
    const mockData = offers;
    const mockResult = {
      type: `SET_OFFERS`,
      payload: mockData,
    };


    expect(ActionCreator.setOffers(mockData)).toEqual(mockResult);
  });
});
