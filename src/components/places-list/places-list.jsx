import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <PlaceCard key={offer.id} card={offer}
          onCardHover={
            (card) => {
              console.log(card);
              //this.setState({activeCard: card});
            }
          }
          onHeaderClick={() => {}}/>)}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default PlacesList;
