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
  getReviewsSelector,
  getOffersNearbySelector,
  getFavoritesCitiesListSelector,
  getActiveOfferIdSelector,
  getReviewsCountSelector} from './selectors';


const state = {
  city: {name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}},
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
      reviews: [{
        "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
        "date": `2019-05-08T14:13:56.569Z`,
        "id": 1,
        "rating": 4,
        "user": {
          "avatar_url": `img/1.png`,
          "id": 4,
          "is_pro": false,
          "name": `Max`
        }
      }],
      neighborhood: [],
      isFavorite: false}
  },
  offersNearbyIds: [1],
  offersFavoritesIds: [1],
  reviews: [{
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 1,
    "rating": 4,
    "user": {
      "avatar_url": `img/1.png`,
      "id": 4,
      "is_pro": false,
      "name": `Max`
    }
  }],
  activeOfferId: 1,
  authorizationStatus: `NO_AUTH`,
  user: {
    avatar: `img/1.png`,
    id: 4,
    isTrust: false,
    name: `Max`
  },
  activeFilter: {label: `Popular`, value: `ALL`}
};

const offersMock = [
  {id: 1,
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
    reviews: [{
      "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      "date": `2019-05-08T14:13:56.569Z`,
      "id": 1,
      "rating": 4,
      "user": {
        "avatar_url": `img/1.png`,
        "id": 4,
        "is_pro": false,
        "name": `Max`
      }
    }],
    neighborhood: [],
    isFavorite: false}
];

const offerMock = {id: 1,
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
  reviews: [{
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 1,
    "rating": 4,
    "user": {
      "avatar_url": `img/1.png`,
      "id": 4,
      "is_pro": false,
      "name": `Max`
    }
  }],
  neighborhood: [],
  isFavorite: false};

const cityMock = {name: `Cologne`, location: {"latitude": 50.938361, "longitude": 6.959974, "zoom": 13}};

describe(`getCitiesListSelector`, () => {
  it(`should return CitiesListSelector`, () => {
    expect(getCitiesListSelector(state)).toEqual([cityMock]);
  });
});

describe(`getCitySelector`, () => {
  it(`should return city`, () => {
    expect(getCitySelector(state)).toEqual(cityMock);
  });
});

describe(`getOffersInCitySelector`, () => {
  it(`should return offers in city`, () => {
    expect(getOffersInCitySelector(state)).toEqual(offersMock);
  });
});

describe(`getSortedOffersInCitySelector`, () => {
  it(`should return sorted offers in city`, () => {
    expect(getSortedOffersInCitySelector(state)).toEqual(offersMock);
  });
});

describe(`getCoordinatesInCitySelector`, () => {
  it(`should return coordinates in city`, () => {
    expect(getCoordinatesInCitySelector(state)).toEqual([[50.932361, 6.937974]]);
  });
});

describe(`getActiveFilter`, () => {
  it(`should return ActiveFilter`, () => {
    expect(getActiveFilter(state)).toEqual({label: `Popular`, value: `ALL`});
  });
});

describe(`getActiveOfferSelector`, () => {
  it(`should return ActiveOffer`, () => {
    expect(getActiveOfferSelector(state)).toEqual(offerMock);
  });
});

describe(`getOffersSelector`, () => {
  it(`should return offers`, () => {
    expect(getOffersSelector(state)).toEqual(offersMock);
  });
});

describe(`getAuthorizationStatusSelector`, () => {
  it(`should return AuthorizationStatus`, () => {
    expect(getAuthorizationStatusSelector(state)).toEqual(`NO_AUTH`);
  });
});

describe(`getUserSelector`, () => {
  it(`should return User`, () => {
    expect(getUserSelector(state)).toEqual({
      avatar: `img/1.png`,
      id: 4,
      isTrust: false,
      name: `Max`
    });
  });
});

describe(`getReviewsSelector`, () => {
  it(`should return Reviews`, () => {
    expect(getReviewsSelector(state)).toEqual([{
      "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
      "date": `2019-05-08T14:13:56.569Z`,
      "id": 1,
      "rating": 4,
      "user": {
        "avatar_url": `img/1.png`,
        "id": 4,
        "is_pro": false,
        "name": `Max`
      }
    }]);
  });
});

describe(`getOffersNearbySelector`, () => {
  it(`should return OffersNearby`, () => {
    expect(getOffersNearbySelector(state)).toEqual([offerMock]);
  });
});

describe(`getOffersFavoritesSelector`, () => {
  it(`should return OffersFavorites`, () => {
    expect(getOffersNearbySelector(state)).toEqual([offerMock]);
  });
});

describe(`getFavoritesCitiesListSelector`, () => {
  it(`should return FavoritesCitiesList`, () => {
    expect(getFavoritesCitiesListSelector(state)).toEqual([cityMock]);
  });
});

describe(`getActiveOfferIdSelector`, () => {
  it(`should return ActiveOfferId`, () => {
    expect(getActiveOfferIdSelector(state)).toEqual(1);
  });
});

describe(`getReviewsCountSelector`, () => {
  it(`should return ReviewsCountSelector`, () => {
    expect(getReviewsCountSelector(state)).toEqual(1);
  });
});
