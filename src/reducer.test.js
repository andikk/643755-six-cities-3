import {reducer, ActionCreator, ActionType} from './reducer';
import offers from "./mocks/offers";

const initialState = {
  city: offers[0].city,
  offers,
  activeFilter: null,
  activeOffer: null
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: offers[0].city,
    offers,
    activeFilter: {label: `Popular`, value: `ALL`},
    activeOffer: null
  });
});

describe(`setCity action`, () => {
  it(`returns expected results`, () => {
    const mockResult = {
      type: `SET_CITY`,
      payload: `Paris`,
    };

    expect(ActionCreator.setCity(`Paris`)).toEqual(mockResult);
  });
});

it(`sets city correctly`, () => {
  const mockCity = `Paris`;
  const mockAction = {
    type: ActionType.SET_CITY,
    payload: mockCity,
  };
  const mockResult = {
    city: mockCity,
    offers,
    activeFilter: null,
    activeOffer: null
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
    city: `Amsterdam`,
    offers,
    activeFilter: null,
    activeOffer: null
  };

  expect(reducer(initialState, mockAction)).toEqual(mockResult);
});

describe(`setFilter action`, () => {
  it(`returns expected results`, () => {
    const mockData = `Popular`;
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
    payload: `Popular`,
  };
  const mockResult = {
    city: `Amsterdam`,
    offers,
    activeFilter: `Popular`,
    activeOffer: null
  };

  expect(reducer(initialState, mockAction)).toEqual(mockResult);
});

describe(`setActiveOffer action`, () => {
  it(`returns expected results`, () => {
    const mockData = {
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
    };
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
    payload: {
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
  };
  const mockResult = {
    city: `Amsterdam`,
    offers,
    activeFilter: null,
    activeOffer: {
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
    }
  };

  expect(reducer(initialState, mockAction)).toEqual(mockResult);
});

