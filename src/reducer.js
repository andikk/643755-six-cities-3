//  import offers from "./mocks/offers";
import Offer from "./Offer.js";

export const initialState = {
  city: {},
  offers: [],
  activeFilter: {label: `Popular`, value: `ALL`},
  activeOffer: null
};

const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_OFFERS: `SET_OFFERS`,
  SET_FILTER: `SET_FILTER`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`
};

const ActionCreator = {
  setCity: (payload) => ({
    type: ActionType.SET_CITY,
    payload,
  }),

  setOffers: (payload) => ({
    type: ActionType.SET_OFFERS,
    payload,
  }),

  setFilter: (payload) => ({
    type: ActionType.SET_FILTER,
    payload,
  }),

  setActiveOffer: (payload) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload,
  })
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const mappedOffers = response.data.map((it) => new Offer(it));
        dispatch(ActionCreator.setCity(mappedOffers[0].city));
        dispatch(ActionCreator.setOffers(mappedOffers));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return Object.assign({}, state, {
        city: action.payload,
      });
    case ActionType.SET_OFFERS:
      return Object.assign({}, state, {
        offers: action.payload,
      });
    case ActionType.SET_FILTER:
      return Object.assign({}, state, {
        activeFilter: action.payload,
      });
    case ActionType.SET_ACTIVE_OFFER:
      return Object.assign({}, state, {
        activeOffer: action.payload,
      });
    default: return state;
  }
};

export {ActionCreator, ActionType, Operation, reducer};
