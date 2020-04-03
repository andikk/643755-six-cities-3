import {
  getCitiesListSelector,
  getCitySelector,
  getOffersInCitySelector,
  getCoordinatesInCitySelector,
  getSortedOffersInCitySelector,
  getActiveFilter,
  getActiveOfferSelector,
  getOffersSelector,
  getAuthorizationStatusSelector,
  getUserSelector,
  getOfferByIdSelector,
  getReviewsSelector,
  getOffersNearbySelector,
  getOffersFavoritesSelector,
  getFavoritesCitiesListSelector,
  getActiveOfferIdSelector,
  getReviewsCountSelector} from './selectors';
import {initialState} from "./reducer";

const offersMap = [{id: 1,
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
];
const citiesListMock = [{name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}}];
const cityMock = {name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}};
const coordinatesInCityMock = [50.932361, 6.937974];


describe(`getCitiesListSelector`, () => {
  it(`should return CitiesListSelector`, () => {
    const state = Object.assign({}, initialState, {offersMap, offersIds: [1], city: cityMock });
    console.log(state);
    expect(getCitiesListSelector(state)).toEqual(citiesListMock);
  });
});

describe(`getCitySelector`, () => {
  it(`should return city`, () => {
    const state = Object.assign({}, initialState, {city: cityMock});
    expect(getCitySelector(state)).toEqual(cityMock);
  });
});

describe(`getOffersInCitySelector`, () => {
  it(`should return offers in city`, () => {
    const state = Object.assign({}, initialState, {offersMap});
    expect(getOffersInCitySelector(state)).toEqual(offersMap);
  });
});

describe(`getSortedOffersInCitySelector`, () => {
  it(`should return sorted offers in city`, () => {
    const state = Object.assign({}, initialState, {offersMap});
    expect(getSortedOffersInCitySelector(state)).toEqual(offersMap);
  });
});

describe(`getCoordinatesInCitySelector`, () => {
  it(`should return coordinates in city`, () => {
    const state = Object.assign({}, initialState, {offersMap});
    expect(getCoordinatesInCitySelector(state)).toEqual(coordinatesInCityMock);
  });
});
