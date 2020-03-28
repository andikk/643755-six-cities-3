import {createSelector} from 'reselect';
import {sortOffers} from "./utils.js";

const getActiveFilter = (state) => state.activeFilter;
const getOffersIdsSelector = (state) => state.offersIds;
const getOffersMapSelector = (state) => state.offersMap;
//const getOffersNearbySelector = (state) => state.offersNearby;
const getOffersNearbyIdsSelector = (state) => state.offersNearbyIds;
const getReviewsSelector = (state) => state.reviews;
const getCitySelector = (state) => state.city;
//const getActiveOfferSelector = (state) => state.activeOffer;
const getActiveOfferIdSelector = (state) => state.activeOfferId;
const getAuthorizationStatusSelector = (state) => state.authorizationStatus;
const getUserSelector = (state) => state.user;

const getOffersSelector = createSelector(
  getOffersIdsSelector, getOffersMapSelector,
  (offersIds, offersMap) => offersIds.map(id => offersMap[id])
);

const getActiveOfferSelector = createSelector (
  getActiveOfferIdSelector, getOffersMapSelector,
  (offerId, offersMap) => offersMap[offerId]
);

const getOffersNearbySelector = createSelector (
  getOffersNearbyIdsSelector, getOffersMapSelector,
  (offersNearbyIds, offersMap) => offersNearbyIds.map(id => offersMap[id])
);

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

const getOfferByIdSelector = createSelector(
    getOffersMapSelector,
    (offersMap) => (id) => offersMap[id],
);

export {getCitiesListSelector,
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
  getOffersNearbySelector};
