import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
// список предложений
const PlacesList = (props) => {
  const {offers, onHeaderClick, onCardHover, className} = props;

  return (
    <div className={`${className} places__list`}>
      {offers.map((offer) => <PlaceCard key={offer.id} card={offer}
        onCardHover={onCardHover}
        onHeaderClick={onHeaderClick}/>)}
    </div>
  );

};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PlaceCard.propTypes.card).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
  onCardHover: PropTypes.func
};

PlacesList.defaultProps = {
  onHeaderClick: () => {}
};

export default PlacesList;
