import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card.jsx";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cardId: null,
    };
  }

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => <PlaceCard key={offer.id}
          mark={offer.mark}
          src={offer.src}
          price={offer.price}
          rating={offer.rating}
          name={offer.name}
          type={offer.type}
          onCardHover={() => {
            this.setState({cardId: offer.id});
          }}
          onHeaderClick={() => {}}/>)}
      </div>
    );
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
};

export default PlacesList;
