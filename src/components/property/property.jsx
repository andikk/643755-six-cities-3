import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import Map from "../map/map.jsx";
import PlacesList from "../places-list/places-list.jsx";
import {connect} from "react-redux";
import {
  getOfferByIdSelector,
  getReviewsSelector,
  getOffersNearbySelector,
  getAuthorizationStatusSelector, getUserSelector
} from "../../selectors";
import ReviewForm from "../review-form/review-form.jsx";
import {ActionCreator, Operation} from "../../reducer";
import {Link} from "react-router-dom";

// страница предложения
class Property extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    if (this.props.card !== prevProps.card) {
      window.scrollTo(0, 0);
    }
  }

  componentDidMount() {
    const {loadReviews, loadNearby, offerId} = this.props;
    loadReviews(offerId);
    loadNearby(offerId);
  }

  render() {
    if (!this.props.card) {
      return null;
    }

    const {addToFavorite, offerId} = this.props;

    const handleBookmarkClick = () => {
      const BookmarkActions = {
        ADD: `1`,
        REMOVE: `0`
      };

      const {ADD, REMOVE} = BookmarkActions;
      const status = isFavorite ? REMOVE : ADD;

      addToFavorite(offerId, status);
    };

    const {card = {}, reviews = [], neighborhood = [], onCardHover, authorizationStatus, user = {}} = this.props;
    const {photos, description, premium, bedrooms, guests, features, owner, price, rating, name, type, city, coordinates, isFavorite} = card;
    const coordinatesNearby = neighborhood.map((item) => (item.coordinates));

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
                    {(authorizationStatus === `AUTH`) &&
                    <Link to="/favorites" className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper"> </div>
                      <span className="header__user-name user__name">{ user.email }</span>
                    </Link>
                    }
                    {(authorizationStatus === `NO_AUTH`) &&
                    <Link to="/login" className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper"> </div>
                      <span className="header__login">Sign in</span>
                    </Link>
                    }
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">

                {photos.filter((photo, index) => index < 6)
                  .map((photo, index) => (
                    <div className="property__image-wrapper" key={photo + index}>
                      <img className="property__image" src={photo} alt={name}/>
                    </div>
                  ))}
              </div>

            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {premium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
                }

                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {name}
                  </h1>
                  <button
                    style={{position: `absolute`, top: `41px`, right: `93px`}}
                    className={`place-card__bookmark-button place-card__bookmark-button${isFavorite ? `--active` : ``} button`}
                    type="button"
                    onClick={handleBookmarkClick}
                  >
                    <svg className="place-card__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">In bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${rating <= 4 ? rating * 20 : 100}%`}}/>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">4.8</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {guests} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {features.map((feature, index) => (
                      <li className="property__inside-item" key={feature + index}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div
                      className={`property__avatar-wrapper ${owner.super ? ` property__avatar-wrapper--pro` : ``} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar" src={owner.src} width="74" height="74"
                        alt={owner.name}/>
                    </div>
                    <span className="property__user-name">
                      {owner.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                  <ReviewsList className="property__reviews" reviews={reviews}/>
                  {(authorizationStatus === `AUTH`) &&
                  <ReviewForm/>
                  }
                </section>

              </div>
            </div>

            <Map className="property__map"
              city={city}
              coordinates={[...coordinatesNearby, coordinates]}
              activeMarker={coordinates}/>

          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>

              <PlacesList offers={neighborhood}
                onCardHover={onCardHover}
                className="near-places__list places__list" classNameForArticle="near-places__card"/>

            </section>
          </div>
        </main>
      </div>
    );
  }
}

Property.propTypes = {
  card: PropTypes.shape({
    photos: PropTypes.array,
    description: PropTypes.string,
    premium: PropTypes.bool,
    bedrooms: PropTypes.number,
    guests: PropTypes.number,
    features: PropTypes.array,
    owner: PropTypes.object,
    price: PropTypes.number,
    rating: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    city: PropTypes.object,
    coordinates: PropTypes.array
  }).isRequired,
  loadReviews: PropTypes.func,
  loadNearby: PropTypes.func,
  offerId: PropTypes.number,
  reviews: PropTypes.array,
  neighborhood: PropTypes.array,
  onCardHover: PropTypes.func,
  authorizationStatus: PropTypes.string,
  user: PropTypes.object,
  addToFavorite: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const id = Number(ownProps.match.params.id);
  return ({
    user: getUserSelector(state),
    card: getOfferByIdSelector(state)(id),
    offerId: Number(ownProps.match.params.id),
    reviews: getReviewsSelector(state),
    neighborhood: getOffersNearbySelector(state),
    authorizationStatus: getAuthorizationStatusSelector(state)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadReviews: () => dispatch(Operation.loadReviews(ownProps.match.params.id)),
  loadNearby: () => dispatch(Operation.loadNearby(ownProps.match.params.id)),
  onCardHover: ActionCreator.setActiveOffer,
  addToFavorite: (id, status) => {
    return dispatch(Operation.addToFavorite(id, status))
      .catch(() => {
        ownProps.history.push(`/login`);
      });
  }
});

export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);
