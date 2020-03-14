//  import offers from "./mocks/offers";
import Offer from "./Offer.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const initialState = {
  city: {},
  offers: [],
  activeFilter: {label: `Popular`, value: `ALL`},
  activeOffer: null,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};

const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_OFFERS: `SET_OFFERS`,
  SET_FILTER: `SET_FILTER`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
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
  }),

  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
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
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    default: return state;
  }
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

  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      });
  },
};

export {ActionCreator, ActionType, Operation, reducer};
