import {createSelector} from 'reselect';
import {compare} from "./utils.js";

const getActiveFilter = (state) => state.activeFilter;
const getOffersSelector = (state) => state.offers;
const getCitySelector = (state) => state.city;

switch (getActiveFilter) {
  case "Popular" :

}


const getCitiesListSelector = createSelector(
    getOffersSelector,
    (offers) => [...new Set(offers.map((offer) => offer.city))]
);

const getOffersInCitySelector = createSelector(
    getOffersSelector,
    getCitySelector,
    (offers, city) => offers.filter((offer) => offer.city === city)
);

const getCoordinatesInCitySelector = createSelector(
    getOffersInCitySelector,
    (offers) => offers.map((offer) => (offer.coordinates))
);


export {getCitiesListSelector, getCitySelector, getOffersInCitySelector, getCoordinatesInCitySelector};
