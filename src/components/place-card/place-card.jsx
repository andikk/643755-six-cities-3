import React from "react";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import PropTypes from "prop-types";

const PlaceCard = (props) => {
  const {card} = props;
  const {mark, src, price, rating, name, type, id} = card;
  const {onHeaderClick, onCardHover} = props;

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={() => {
        onCardHover(card);
      }}
      onMouseLeave={() => {
        onCardHover(null);
      }}>

      <div className="place-card__mark">
        <span>{mark}</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={src} width="260" height="200" alt={name}/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    mark: PropTypes.string,
    src: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    type: PropTypes.string,
  }).isRequired,

  onCardHover: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func
};

PlaceCard.defaultProps = {
  onHeaderClick: () => {}
};

export default PlaceCard;
