import {
  getCitiesListSelector,
  getCitySelector,
  getOffersInCitySelector,
  getCoordinatesInCitySelector,
  getSortedOffersInCitySelector} from './selectors';
import {initialState} from "./reducer";
import offers from "./mocks/offers";
const citiesListMock = ["Amsterdam"];
const cityMock = `Paris`;
const offersInCityMock = [
  {
    id: 0,
    city: `Amsterdam`,
    src: `img/apartment-01.jpg`,
    photos: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Super description`,
    premium: true,
    bedrooms: 3,
    guests: 4,
    features: [`Wifi`, `Cable TV`, `Kitchen`],
    owner: {
      name: `Jon`,
      super: true,
      src: `img/avatar-max.jpg`
    },
    price: 120,
    rating: 1,
    name: `Name0`,
    type: `Apartment`,
    coordinates: [52.3909553943508, 4.85309666406198],
    reviews: [
      {id: 0, text: `Review1 object1`, rating: 1, user: `Max`, date: `2017-01-26`},
      {id: 1, text: `Review2 object1`, rating: 1, user: `Max`, date: `2018-01-26`},
      {id: 2, text: `Review3 object1`, rating: 1, user: `Max`, date: `2019-01-26`}
    ],
    neighborhood: [
      {
        id: 1,
        coordinates: [52.369553943508, 4.85309666406198],
        name: `Some name`,
        premium: true,
        src: `img/apartment-01.jpg`,
        price: 100,
        rating: 2.3,
        type: `Appartment`
      },
      {
        id: 2,
        coordinates: [52.3909553943508, 4.929309666406198],
        name: `Some name`,
        premium: true,
        src: `img/apartment-01.jpg`,
        price: 100,
        rating: 2.3,
        type: `Appartment`
      },
      {
        id: 3,
        coordinates: [52.3909553943508, 4.729309666406198],
        name: `Some name`,
        premium: true,
        src: `img/apartment-01.jpg`,
        price: 100,
        rating: 2.3,
        type: `Appartment`
      },
    ]
  },
  {
    id: 1,
    city: `Amsterdam`,
    src: `img/apartment-01.jpg`,
    photos: [`img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`, `img/apartment-01.jpg`],
    description: `Super description`,
    premium: true,
    bedrooms: 3,
    guests: 4,
    features: [`Wifi`, `Cable TV`, `Kitchen`],
    owner: {
      name: `Jon`,
      super: true,
      src: `img/avatar-max.jpg`
    },
    price: 220,
    rating: 2,
    name: `Name1`,
    type: `NeApartment`,
    coordinates: [52.369553943508, 4.85309666406198],
    reviews: [
      {id: 0, text: `Review1 object2`, rating: 1, user: `Max`, date: `2017-01-26`},
      {id: 1, text: `Review2 object2`, rating: 1, user: `Max`, date: `2018-01-26`},
      {id: 2, text: `Review3 object2`, rating: 1, user: `Max`, date: `2019-01-26`}
    ],
    neighborhood: [
      {
        id: 0,
        city: `Amsterdam`,
        coordinates: [52.3909553943508, 4.85309666406198],
        name: `Some name`,
        premium: true,
        src: `img/apartment-01.jpg`,
        price: 100,
        rating: 2.3,
        type: `Appartment`
      },
      {
        id: 2,
        coordinates: [52.3909553943508, 4.929309666406198],
        name: `Some name`,
        premium: true,
        src: `img/apartment-01.jpg`,
        price: 100,
        rating: 2.3,
        type: `Appartment`
      },
      {
        id: 3,
        coordinates: [52.3909553943508, 4.729309666406198],
        name: `Some name`,
        premium: true,
        src: `img/apartment-01.jpg`,
        price: 100,
        rating: 2.3,
        type: `Appartment`
      },
    ]
  },
];
const coordinatesInCityMock = [[52.3909553943508, 4.85309666406198], [52.369553943508, 4.85309666406198]];


describe(`getCitiesListSelector`, () => {
  it(`should return CitiesListSelector`, () => {
    const state = Object.assign({}, initialState, {offers});
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
    const state = Object.assign({}, initialState, {offers: offersInCityMock});
    expect(getOffersInCitySelector(state)).toEqual(offersInCityMock);
  });
});

describe(`getSortedOffersInCitySelector`, () => {
  it(`should return sorted offers in city`, () => {
    const state = Object.assign({}, initialState, {offers: offersInCityMock});
    expect(getSortedOffersInCitySelector(state)).toEqual(offersInCityMock);
  });
});

describe(`getCoordinatesInCitySelector`, () => {
  it(`should return coordinates in city`, () => {
    const state = Object.assign({}, initialState, {offers: offersInCityMock});
    expect(getCoordinatesInCitySelector(state)).toEqual(coordinatesInCityMock);
  });
});
