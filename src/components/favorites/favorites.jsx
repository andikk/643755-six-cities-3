import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PlacesList from "../places-list/places-list.jsx";
import {Operation} from "../../reducer";
import {getOffersFavoritesSelector, getFavoritesCitiesListSelector} from "../../selectors.js";

class Favorites extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {loadFavorites} = this.props;
    loadFavorites();
  }

  render() {

    const {favoritesOffers, addToFavorite, favoritesCities} = this.props;
    favoritesCities.forEach((city) => {
      console.log(city.name);
      favoritesOffers.forEach((offer) => {
        if (offer.city.name === city.name) {
          console.log(offer);
        }
      });
    });


    // const handleBookmarkClick = () => {
    //   const BookmarkActions = {
    //     ADD: `1`,
    //     REMOVE: `0`
    //   };
    //
    //   const {ADD, REMOVE} = BookmarkActions;
    //   const status = REMOVE;
    //
    //   addToFavorite(offerId, status);
    // };

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="/">
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

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>

              <ul className="favorites__list">
                {favoritesCities.map((city) =>
                  (<li key={city.name} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city.name}</span>
                        </a>
                      </div>
                    </div>

                    <PlacesList className="favorites__places"
                      classNameForArticle="favorites__card"
                      classNameForItems="favorites"
                      offers={favoritesOffers.filter((offer) => offer.city.name === city.name)}
                    />
                  </li>))
                }
              </ul>

            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
          </a>
        </footer>
      </div>
    );
  }
}


Favorites.propTypes = {
  favoritesOffers: PropTypes.array,
  favoritesCities: PropTypes.array,
  loadFavorites: PropTypes.func,
  addToFavorite: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  return {
    favoritesOffers: getOffersFavoritesSelector(state),
    favoritesCities: getFavoritesCitiesListSelector(state)
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadFavorites: () => dispatch(Operation.loadFavorites(ownProps.match.params.id)),
  addToFavorite: (id, status) => {
    return dispatch(Operation.addToFavorite(id, status))
      .catch(() => {
        ownProps.history.push(`/login`);
      });
  }
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

