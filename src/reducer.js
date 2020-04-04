import Offer from "./Offer.js";
import {getOfferByIdSelector} from "./selectors.js";
import {ACTIVE_FILTER} from "./const.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const initialState = {
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

const ActionType = {
  SET_CITY: `SET_CITY`,
  SET_OFFERS: `SET_OFFERS`,
  SET_OFFERS_NEARBY: `SET_OFFERS_NEARBY`,
  SET_REVIEWS: `SET_REVIEWS`,
  SET_FILTER: `SET_FILTER`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  SET_FAVORITE_OFFER: `SET_FAVORITE_OFFER`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SET_USER: `SET_USER`,
  SET_OFFERS_FAVORITES: `SET_OFFERS_FAVORITES`,
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

  setOffersNearby: (payload) => ({
    type: ActionType.SET_OFFERS_NEARBY,
    payload,
  }),

  setOffersFavorites: (payload) => ({
    type: ActionType.SET_OFFERS_FAVORITES,
    payload,
  }),

  setReviews: (payload) => ({
    type: ActionType.SET_REVIEWS,
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

  setFavoriteOffer: (id, payload) => ({
    type: ActionType.SET_FAVORITE_OFFER,
    meta: {id},
    payload,
  }),

  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },

  setUser: (payload) => {
    return {
      type: ActionType.SET_USER,
      payload,
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
        offersIds: action.payload.map((offer) => offer.id),
        offersMap: action.payload.reduce((out, offer) => {
          out[offer.id] = offer;
          return out;
        }, {})
      });
    case ActionType.SET_OFFERS_NEARBY:
      return Object.assign({}, state, {
        offersNearbyIds: action.payload.map((offer) => offer.id),
        offersMap: Object.assign({},
            state.offersMap,
            action.payload.reduce((out, offer) => {
              out[offer.id] = offer;
              return out;
            }, {})),
      });
    case ActionType.SET_OFFERS_FAVORITES:
      return Object.assign({}, state, {
        offersFavoritesIds: action.payload.map((offer) => offer.id),
        offersMap: Object.assign({},
            state.offersMap,
            action.payload.reduce((out, offer) => {
              out[offer.id] = offer;
              return out;
            }, {})),
      });
    case ActionType.SET_REVIEWS:
      return Object.assign({}, state, {
        reviews: action.payload,
      });
    case ActionType.SET_FILTER:
      return Object.assign({}, state, {
        activeFilter: action.payload,
      });
    case ActionType.SET_ACTIVE_OFFER:
      return Object.assign({}, state, {
        activeOfferId: action.payload,
      });
    case ActionType.SET_FAVORITE_OFFER:
      return Object.assign({}, state, {
        offersFavoritesIds: action.payload
          ? state.offersFavoritesIds.concat(action.meta.id)
          : state.offersFavoritesIds.filter((id) => id !== action.meta.id),
        offersMap: Object.assign({}, state.offersMap, {
          [action.meta.id]: Object.assign({},
              state.offersMap[action.meta.id],
              {isFavorite: action.payload}
          ),
        })
      });
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.SET_USER:
      return Object.assign({}, state, {
        user: action.payload,
      });
    default: return state;
  }
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const mappedOffers = response.data.map((item) => new Offer(item));
        dispatch(ActionCreator.setCity(mappedOffers[0].city));
        dispatch(ActionCreator.setOffers(mappedOffers));
      });
  },

  loadNearby: (id) => (dispatch, getState, api) => {
    return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        const mappedOffers = response.data.map((item) => new Offer(item));
        dispatch(ActionCreator.setOffersNearby(mappedOffers));
      });
  },

  loadFavorites: () => (dispatch, getState, api) => {

    return api.get(`/favorite`)
      .then((response) => {
        const mappedOffers = response.data.map((item) => new Offer(item));
        dispatch(ActionCreator.setOffersFavorites(mappedOffers));
      });
  },

  loadReviews: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {
        dispatch(ActionCreator.setReviews(response.data));
      });
  },

  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((user) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUser(user.data));
      })
      .catch(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
      });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.setUser(response.data));
      });
  },

  addComment: (commentData, offerId) => (dispatch, getState, api) => {

    return api.post(`/comments/${offerId}`, {
      comment: commentData.comment,
      rating: commentData.rating,
    })
      .then((response) => {
        dispatch(ActionCreator.setReviews(response.data));
      });
  },

  addToFavorite: (id) => (dispatch, getState, api) => {
    const state = getState();
    const offer = getOfferByIdSelector(state)(id);
    const status = offer.isFavorite ? 0 : 1;

    return api.post(`favorite/${id}/${status}`)
      .then(() => {
        dispatch(ActionCreator.setFavoriteOffer(id, !!status));
      });
  }
};

export {ActionCreator, ActionType, Operation, reducer};
