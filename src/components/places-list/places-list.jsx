import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
import {connect} from "react-redux";
import {Operation} from "../../reducer.js";

// список предложений
const PlacesList = (props) => {
  const {offers, onCardHover, imgSize, addToFavorite, className, classNameForArticle, classNameForItems} = props;

  return (
    <div className={`${className}`}>
      {offers.map((offer) => <PlaceCard key={offer.id} card={offer}
        onCardHover={onCardHover}
        classNameForArticle={classNameForArticle}
        classNameForItems={classNameForItems}
        imgSize={imgSize}
        onBookmarkClick={addToFavorite}
      />)}
    </div>
  );

};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PlaceCard.propTypes.card).isRequired,
  className: PropTypes.string.isRequired,
  classNameForArticle: PropTypes.string,
  classNameForItems: PropTypes.string,
  imgSize: PropTypes.object,
  onCardHover: PropTypes.func,
  addToFavorite: PropTypes.func,
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
