import offers from "./mocks/offers";
const initialState = {
  city: offers[0].city,
  offers,
  activeFilter: `Popular`,
};

const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_OFFERS: `SET_OFFERS`,
  SET_FILTER: `SET_FILTER`
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
  })
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
    default: return state;
  }
};

export {ActionCreator, ActionType, reducer};
