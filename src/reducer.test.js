import {reducer, ActionCreator, ActionType} from './reducer';
//import offers from "./mocks/offers";
import {ACTIVE_FILTER} from "./const";

const offers = [{id: 1,
  city: {name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}},
  src: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
  photos: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`],
  description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
  premium: false,
  bedrooms: 5,
  guests: 5,
  features: [`Breakfast`, `Washer`, `Air conditioning`, `Laptop friendly workspace`, `Baby seat`],
  owner: {id: 25, name: `Angelina`, super: true, src: `img/avatar-angelina.jpg`},
  price: 403,
  rating: 2.9,
  name: `Wood and stone place`,
  type: `house`,
  coordinates: [50.932361, 6.937974],
  reviews: [],
  neighborhood: [],
  isFavorite: false}];

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  city: {},
  offersIds: [],
  offersMap: {},
  offersNearbyIds: [],
  offersFavoritesIds: [],
  reviews: [],
  activeOfferId: null,
  activeFilter: ACTIVE_FILTER,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: {},
    offersIds: [],
    offersMap: {},
    offersNearbyIds: [],
    offersFavoritesIds: [],
    reviews: [],
    activeOfferId: null,
    activeFilter: ACTIVE_FILTER,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null,
  });
});

describe(`setCity action`, () => {
  it(`returns expected results`, () => {
    const mockResult = {
      type: `SET_CITY`,
      payload: {name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}},
    };

    expect(ActionCreator.setCity({name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}})).toEqual(mockResult);
  });
});

it(`sets city correctly`, () => {
  const mockCity = {name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}};
  const mockAction = {
    type: ActionType.SET_CITY,
    payload: mockCity,
  };
  const mockResult = {
    city: mockCity,
    offersIds: [],
    offersMap: {},
    offersNearbyIds: [],
    offersFavoritesIds: [],
    reviews: [],
    activeOfferId: null,
    activeFilter: ACTIVE_FILTER,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null,
  };

  expect(reducer(initialState, mockAction)).toEqual(mockResult);
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

it(`sets offers correctly`, () => {
  const mockAction = {
    type: ActionType.SET_OFFERS,
    payload: offers,
  };
  const mockResult = {
    city: {},
    offersIds: [1],
    offersMap: {
      1: {id: 1,
        city: {name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}},
        src: `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`,
        photos: [`https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/10.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/11.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/12.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/13.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/8.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/9.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/1.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/6.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/20.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/4.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/7.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/5.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/18.jpg`, `https://htmlacademy-react-3.appspot.com/six-cities/static/hotel/14.jpg`],
        description: `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
        premium: false,
        bedrooms: 5,
        guests: 5,
        features: [`Breakfast`, `Washer`, `Air conditioning`, `Laptop friendly workspace`, `Baby seat`],
        owner: {id: 25, name: `Angelina`, super: true, src: `img/avatar-angelina.jpg`},
        price: 403,
        rating: 2.9,
        name: `Wood and stone place`,
        type: `house`,
        coordinates: [50.932361, 6.937974],
        reviews: [],
        neighborhood: [],
        isFavorite: false}
    },
    offersNearbyIds: [],
    offersFavoritesIds: [],
    reviews: [],
    activeOfferId: null,
    activeFilter: ACTIVE_FILTER,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null,
  };

  expect(reducer(initialState, mockAction)).toEqual(mockResult);
});

describe(`setFilter action`, () => {
  it(`returns expected results`, () => {
    const mockData = ACTIVE_FILTER;
    const mockResult = {
      type: `SET_FILTER`,
      payload: mockData,
    };

    expect(ActionCreator.setFilter(mockData)).toEqual(mockResult);
  });
});

it(`sets filter correctly`, () => {

  const mockAction = {
    type: ActionType.SET_FILTER,
    payload: ACTIVE_FILTER,
  };
  const mockResult = {
    city: {},
    offersIds: [],
    offersMap: {},
    offersNearbyIds: [],
    offersFavoritesIds: [],
    reviews: [],
    activeOfferId: null,
    activeFilter: ACTIVE_FILTER,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null,
  };

  expect(reducer(initialState, mockAction)).toEqual(mockResult);
});

describe(`setActiveOffer action`, () => {
  it(`returns expected results`, () => {
    const mockData = 1;
    const mockResult = {
      type: `SET_ACTIVE_OFFER`,
      payload: mockData,
    };

    expect(ActionCreator.setActiveOffer(mockData)).toEqual(mockResult);
  });
});


it(`sets ActiveOffer correctly`, () => {

  const mockAction = {
    type: ActionType.SET_ACTIVE_OFFER,
    payload: 1
  };
  const mockResult = {
    city: {},
    offersIds: [],
    offersMap: {},
    offersNearbyIds: [],
    offersFavoritesIds: [],
    reviews: [],
    activeOfferId: 1,
    activeFilter: ACTIVE_FILTER,
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    user: null,
  };

  expect(reducer(initialState, mockAction)).toEqual(mockResult);
});

