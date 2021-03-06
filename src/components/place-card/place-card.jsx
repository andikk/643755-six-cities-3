import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {BookmarkActions} from "../../const.js";
// карточка предложения
const PlaceCard = (props) => {
  const {card, classNameForArticle, classNameForItems, imgSize} = props;

  const {premium, src, price, ratingValue, name, type, id, isFavorite} = card;
  const {onCardHover, onBookmarkClick} = props;

  const handleBookmarkClick = () => {

    const {ADD, REMOVE} = BookmarkActions;
    const status = isFavorite ? REMOVE : ADD;

    onBookmarkClick(id, status);
  };

  return (
    <article className={`${classNameForArticle} place-card`}
      onMouseEnter={() => {
        onCardHover(card);
      }}
      onMouseLeave={() => {
        onCardHover(null);
      }}>

      {premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }

      <div className={`${classNameForItems}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={src} width={imgSize.width} height={imgSize.height} alt={name}/>
        </a>
      </div>
      <div className={`${classNameForItems}__card-info place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button place-card__bookmark-button${isFavorite ? `--active` : ``} button`}
            type="button" onClick={handleBookmarkClick}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingValue <= 4 ? ratingValue * 20 : 100}%`}}></span>
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
    premium: PropTypes.bool,
    isFavorite: PropTypes.bool,
    src: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    ratingValue: PropTypes.number,
    type: PropTypes.string,
  }),
  onCardHover: PropTypes.func,
  onBookmarkClick: PropTypes.func,
  className: PropTypes.string,
  classNameForArticle: PropTypes.string,
  classNameForItems: PropTypes.string,
  imgSize: PropTypes.object
};

export default PlaceCard;
