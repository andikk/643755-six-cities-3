import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
// список предложений
const PlacesList = (props) => {
  const {offers, onHeaderClick, onCardHover, className, classNameForArticle} = props;

  return (
    <div className={`${className}`}>
      {offers.map((offer) => <PlaceCard key={offer.id} card={offer}
        onCardHover={onCardHover}
        onHeaderClick={onHeaderClick}
        classNameForArticle={classNameForArticle}
      />)}
    </div>
  );

};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PlaceCard.propTypes.card).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  onCardHover: PropTypes.func,
  classNameForArticle: PropTypes.string
};

PlacesList.defaultProps = {
  onHeaderClick: () => {}
};

export default PlacesList;
