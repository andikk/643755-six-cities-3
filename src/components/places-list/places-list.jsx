import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

// список предложений
const PlacesList = (props) => {
  const {offers, onCardHover, addToFavorite, className, classNameForArticle} = props;

  return (
    <div className={`${className}`}>
      {offers.map((offer) => <PlaceCard key={offer.id} card={offer}
        onCardHover={onCardHover}
        classNameForArticle={classNameForArticle}
        onBookmarkClick={addToFavorite}
      />)}
    </div>
  );

};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PlaceCard.propTypes.card).isRequired,
  className: PropTypes.string.isRequired,
  onCardHover: PropTypes.func,
  addToFavorite: PropTypes.func,
  classNameForArticle: PropTypes.string
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  addToFavorite: (id, status) => dispatch(ActionCreator.addToFavorite(id, status)),
});

export {PlacesList};
export default connect(mapDispatchToProps)(PlacesList);
