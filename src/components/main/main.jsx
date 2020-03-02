import React from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list.jsx";
import PlacesSorting from "../places-sorting/places-sorting.jsx";
import withSelectedFilter from "../../hocs/with-selected-filter.jsx";
import Map from "../map/map.jsx";
import {connect} from "react-redux";
import CitiesList from "../cities-list/cities-list.jsx";
import {getCitiesListSelector, getCitySelector, getSortedOffersInCitySelector, getCoordinatesInCitySelector, getActiveFilter, getActiveOfferSelector} from "../../selectors.js";
import {ActionCreator} from "../../reducer";

const PlacesSortingWrapped = withSelectedFilter(PlacesSorting);
// главная страница
const Main = (props) => {
  const {offers, onHeaderClick, city, citiesList, onCityClick, coordinates, onFilterClick, activeFilter, onCardHover, activeOffer} = props;
  const offersCount = offers.length;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={`page__main page__main--index ${(offersCount === 0) ? ` page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <CitiesList citiesList={citiesList} city={city} onCityClick={onCityClick}/>
        <div className="cities">
          {(offersCount > 1) &&
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offersCount} places to stay in {city}</b>

                <PlacesSortingWrapped onFilterClick={onFilterClick} activeFilter={activeFilter}/>

                <PlacesList className="cities__places-list tabs__content" offers={offers}
                  onHeaderClick={onHeaderClick} onCardHover={onCardHover}/>
              </section>
              <div className="cities__right-section">
                <Map className={`cities__map`} coordinates={coordinates} activeMarker={(activeOffer) ? activeOffer.coordinates : null}/>
              </div>
            </div>
          }

          {(offersCount === 0) &&
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property availbale at the moment in Dusseldorf</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          }

        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.string.isRequired,
  citiesList: PropTypes.array.isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onCityClick: PropTypes.func.isRequired,
  coordinates: PropTypes.array.isRequired,
  onFilterClick: PropTypes.func,
  activeFilter: PropTypes.object,
  onCardHover: PropTypes.func,
  activeOffer: PropTypes.object
};

Main.defaultProps = {
  onHeaderClick: () => {},
  activeOffer: null,
};

const mapStateToProps = (state) => {
  return {
    offers: getSortedOffersInCitySelector(state),
    city: getCitySelector(state),
    activeFilter: getActiveFilter(state),
    citiesList: getCitiesListSelector(state),
    coordinates: getCoordinatesInCitySelector(state),
    activeOffer: getActiveOfferSelector(state)
  };
};

const mapDispatchToProps = {
  onCityClick: ActionCreator.setCity,
  onFilterClick: ActionCreator.setFilter,
  onCardHover: ActionCreator.setActiveOffer
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
