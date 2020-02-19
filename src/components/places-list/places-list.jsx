import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";
// список предложения
class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }

  render() {
    const {offers, onHeaderClick} = this.props;

    return (
      <div className={`${this.props.className} places__list`}>
        {offers.map((offer) => <PlaceCard key={offer.id} card={offer}
          onCardHover={
            (card) => {
              this.setState({activeCard: card});
            }
          }
          onHeaderClick={onHeaderClick}/>)}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(PlaceCard.propTypes.card).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired
};

PlacesList.defaultProps = {
  onHeaderClick: () => {}
};


export default PlacesList;
