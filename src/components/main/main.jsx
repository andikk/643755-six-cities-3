import React from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list.jsx";
import PlacesSorting from "../places-sorting/places-sorting.jsx";
import withSelectedFilter from "../../hocs/with-selected-filter.jsx";
import Map from "../map/map.jsx";
import {connect} from "react-redux";
import CitiesList from "../cities-list/cities-list.jsx";
import MainEmpty from "../main-empty/main-empty.jsx";
import UserNav from "../user-nav/user-nav.jsx";
import {getCitiesListSelector,
  getCitySelector,
  getSortedOffersInCitySelector,
  getCoordinatesInCitySelector,
  getActiveFilter,
  getActiveOfferSelector} from "../../selectors.js";
import {ActionCreator} from "../../reducer";

const PlacesSortingWrapped = withSelectedFilter(PlacesSorting);
// главная страница
const Main = (props) => {
  const {offers,
    city,
    citiesList,
    onCityClick,
    coordinates,
    onFilterClick,
    activeFilter,
    onCardHover,
    activeOffer,
    history} = props;

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
            <UserNav/>
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
                <b className="places__found">{offersCount} places to stay in {city.name}</b>

                <PlacesSortingWrapped onFilterClick={onFilterClick} activeFilter={activeFilter}/>

                <PlacesList className="cities__places-list tabs__content places__list"
                  classNameForArticle="cities__place-card"
                  classNameForItems="cities"
                  offers={offers}
                  history={history}
                  onCardHover={(card) => onCardHover(card && card.id)}/>

              </section>
              <div className="cities__right-section">
                <Map className="cities__map"
                  city={city}
                  coordinates={coordinates}
                  activeMarker={(activeOffer) ? activeOffer.coordinates : null}/>
              </div>
            </div>
          }

          {(offersCount === 0) &&
            <MainEmpty/>
          }

        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  offers: PropTypes.array.isRequired,
  city: PropTypes.object.isRequired,
  citiesList: PropTypes.array.isRequired,
  onCityClick: PropTypes.func.isRequired,
  coordinates: PropTypes.array.isRequired,
  onFilterClick: PropTypes.func,
  activeFilter: PropTypes.object,
  onCardHover: PropTypes.func,
  activeOffer: PropTypes.object,
  history: PropTypes.object
};

Main.defaultProps = {
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
  onCardHover: ActionCreator.setActiveOffer,
};

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
