import {createSelector} from 'reselect';
import {sortOffers} from "./utils.js";

const getActiveFilter = (state) => state.activeFilter;
const getOffersSelector = (state) => state.offers;
const getCitySelector = (state) => state.city;

const getCitiesListSelector = createSelector(
    getOffersSelector,
    (offers) => [...new Set(offers.map((offer) => offer.city))]
);

const getOffersInCitySelector = createSelector(
    getOffersSelector,
    getActiveFilter,
    (offers, order) => sortOffers(offers, order)
);

const getCoordinatesInCitySelector = createSelector(
    getOffersInCitySelector,
    (offers) => offers.map((offer) => (offer.coordinates))
);

export {getCitiesListSelector, getCitySelector, getOffersInCitySelector, getCoordinatesInCitySelector};
