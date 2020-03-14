import {createSelector} from 'reselect';
import {sortOffers} from "./utils.js";

const getActiveFilter = (state) => state.activeFilter;
const getOffersSelector = (state) => state.offers;
const getCitySelector = (state) => state.city;
const getActiveOfferSelector = (state) => state.activeOffer;
const getAuthorizationStatusSelector = (state) => state.authorizationStatus;

const getCitiesListSelector = createSelector(
    getOffersSelector,
    (offers) => [...new Set(offers.map((offer) => offer.city.name))].map((city) => offers.find((offer) => offer.city.name === city).city)
);

const getOffersInCitySelector = createSelector(
    getOffersSelector,
    getCitySelector,
    (offers, city) => offers.filter((offer) => (offer.city.name === city.name))
);

const getCoordinatesInCitySelector = createSelector(
    getOffersInCitySelector,
    (offers) => offers.map((offer) => (offer.coordinates))
);

const getSortedOffersInCitySelector = createSelector(
    getOffersInCitySelector,
    getActiveFilter,
    (offers, order) => sortOffers(offers, order)
);

export {getCitiesListSelector,
  getCitySelector,
  getOffersInCitySelector,
  getCoordinatesInCitySelector,
  getSortedOffersInCitySelector,
  getActiveFilter,
  getActiveOfferSelector,
  getOffersSelector,
  getAuthorizationStatusSelector};
