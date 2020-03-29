import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {connect} from "react-redux";
import {Operation} from "../../reducer.js";

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

PlacesList.defaultProps = {
  onCardHover: () => {}
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  addToFavorite: (id, status) => {
    return dispatch(Operation.addToFavorite(id, status))
      .catch(() => {
        ownProps.history.push(`/login`);
      });
  }
});

export {PlacesList};
export default connect(null, mapDispatchToProps)(PlacesList);
